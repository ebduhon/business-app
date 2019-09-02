/**
 * Reference:
 * https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#custom-router-state-serializer
 */

import { RouterStateSerializer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';

/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. the snapshot contains
 * all information about hte state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only 
 * need the URL from the snapshot in the store. Other items could be
 * returned such as route parameters, query parameters and static route data.
 */

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    
    // Only return an object including the URL and query params
    // instead of the entire snapshot
    return { url, queryParams };
  }
}