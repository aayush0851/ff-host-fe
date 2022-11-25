import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable, of, Subject} from "rxjs";
import { APIService } from "./api.service";
import { finalize } from "rxjs/operators";

export enum CacheOperation {
  NAN,
  ADD,
  DEL,
}

@Injectable({ providedIn: "root" })
export abstract class CRUDService extends APIService {
  protected cache = new Map<string, any>();
  protected pendingGetCalls: { [url: string]: Observable<any> } = {};

  constructor(protected http: HttpClient) {
    super();
  }

  // list operations
  protected _addAll<T>(uri: string, resource: any): Observable<T | T[]> {
    uri = super.fullyQualifiedUri(uri);
    return this.http.put<T>(uri, resource, this.defaultHttpHeaders());
  }

  // Keeping this method to preserve backward compatible behaviour
  protected _getAllRefreshCache<T>(uri: string): Observable<T[]> {
    return this._getAll<T>(uri, true);
  }

  protected _getAll<T>(uri: string, ignoreCache = false): Observable<T[]> {
    return this._get<T[]>(uri, ignoreCache) as Observable<T[]>;
  }

  // individual operations
  protected _addOne<T>(
    uri: string,
    resource?: any,
    headers?: { headers: HttpHeaders },
    cachingUrl?: string
  ): Observable<T> {
    uri = super.fullyQualifiedUri(uri);
    const response$ = this.http.post<T>(
      uri,
      resource,
      headers ? headers : this.defaultHttpHeaders()
    );
    const resSub$ = new Subject<T>();
    this.processResponse(
      cachingUrl ? super.fullyQualifiedUri(cachingUrl) : uri,
      response$,
      CacheOperation.ADD,
      resSub$
    );
    return resSub$;
  }

  protected _getOne<T>(uri: string, ignoreCache?: boolean): Observable<T> {
    return this._get<T>(uri, ignoreCache);
  }

  protected _get<T>(uri: string, ignoreCache?: boolean): Observable<T> {
    uri = super.fullyQualifiedUri(uri);
    if (!ignoreCache && this.cache && this.cache.get(uri) != null) {
      return new Observable((observer) => {
        observer.next(this.cache.get(uri));
        observer.complete();
      });
    } else {
      if (!this.pendingGetCalls[uri]) {
        const responseSub$ = new Subject<T>();
        const response$ = this.http.get(uri, this.defaultHttpHeaders());
        this.pendingGetCalls[uri] = responseSub$;
        // @ts-ignore
        this.processResponse(uri, response$, CacheOperation.ADD, responseSub$);
      }
      return this.pendingGetCalls[uri];
    }
  }

  protected _update<T>(
    uri: string,
    resource: any,
    cachingUrl?: string
  ): Observable<T> {
    uri = super.fullyQualifiedUri(uri);
    const response$ = this.http.put<T>(
      uri,
      resource,
      this.defaultHttpHeaders()
    );
    const resSub$ = new Subject<T>();
    this.processResponse<T>(
      cachingUrl ? super.fullyQualifiedUri(cachingUrl) : uri,
      response$,
      CacheOperation.ADD,
      resSub$
    );
    return resSub$;
  }

  protected _delete<T>(uri: string): Observable<T> {
    uri = super.fullyQualifiedUri(uri);
    const response$ = this.http.delete<T>(uri, this.defaultHttpHeaders());
    const resSub$ = new Subject<T>();
    this.processResponse<T>(uri, response$, CacheOperation.DEL, resSub$);
    return resSub$;
  }

  protected _deleteWithRequestBody<T>(uri: string, body: any): Observable<T> {
    uri = super.fullyQualifiedUri(uri);
    const response$ = this.http.request<T>("DELETE", uri, {
      body,
      headers: this.defaultHttpHeaders().headers,
    });
    const resSub$ = new Subject<T>();
    this.processResponse<T>(uri, response$, CacheOperation.DEL, resSub$);
    return resSub$;
  }

  protected _invalidateCache(uri: string): boolean {
    uri = super.fullyQualifiedUri(uri);
    return this.cache.delete(uri);
  }

  protected _getCache(uri: string): any {
    uri = super.fullyQualifiedUri(uri);
    return this.cache.get(uri);
  }

  // Use this method very carefully.
  protected _setCache(uri: string, response: any) {
    this.cache.set(uri, response);
  }

  private processResponse<T>(
    uri: string,
    response$: Observable<T>,
    cache: CacheOperation,
    responseSub$: Subject<T>
  ): void {
    response$
      .pipe(
        finalize(() => {
          responseSub$.complete();
        })
      )
      .subscribe(
        (resource) => {
          cache === CacheOperation.ADD
            ? this.cache.set(uri, resource)
            : this.cache.delete(uri);
          this.pendingGetCalls[uri] = of(null);
          responseSub$.next(resource);
        },
        (error) => {
          this.pendingGetCalls[uri] = of(null);
          responseSub$.error(error);
        }
      );
  }

  protected defaultHttpHeaders = () => {
    // return {
    //   headers: new HttpHeaders({
    //     "Content-Type": "application/json",
    //     authorization:
    //       "Bearer " + localStorage.getItem(LocalStorageKeys.authToken),
    //     "Access-Control-Allow-Origin": environmentStage.baseUrlFrontEnd,
    //   }),
    // };
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    };
  };
}
