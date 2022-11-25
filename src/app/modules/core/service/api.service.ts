import { Injectable } from "@angular/core";
import {environment} from "../../../../environments/environment";

@Injectable({providedIn: "root"})
export abstract class APIService {
  protected fullyQualifiedUri(uri: string): string {
    return `${environment.baseUrl}${uri}`;
  }
}
