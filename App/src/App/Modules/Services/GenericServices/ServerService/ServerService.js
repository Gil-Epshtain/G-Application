/* Created by Gil on 23/02/2016 */

'use strict';

export default function(ngModule)
{
    ngModule
        .factory("ServerService",
        [
            "$http",
            serverServiceFunc
        ]);

    function serverServiceFunc($http)
    {
        console.log("ServerService: Initializing...");

        let serverService = {};

        // Get
        serverService.httpGet = function(fileUrl, getDeferred, successCallBack)
        {
            if (fileUrl)
            {
                console.log(`ServerService: Sending Get request [${ fileUrl }]`);

                $http({
                    method: 'GET',
                    url: fileUrl
                })
                .success((data) =>
                {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log(`ServerService: Successfully Get response [${ fileUrl }]`);
                    console.log(data);

                    if (successCallBack) { successCallBack(data); }
                    if (getDeferred) { getDeferred.resolve(data); }
                })
                .error((data, status, headers, config) =>
                {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.warn(`ServerService: Error in Get response [url=${ fileUrl }; status=${ status }]`);

                    if (getDeferred) { getDeferred.reject(status); }
                });
            }
            else
            {
                console.warn("ServerService: Error in httpGet method, request Url is empty");
            }
        };

        // Post
        serverService.httpPost = function (fileUrl, requestData, successCallBack, postDeferred)
        {
            if (fileUrl)
            {
                console.log(`ServerService: Sending Post request [${ fileUrl }]`);

                $http({
                    method: 'POST',
                    url: fileUrl,
                    data: requestData
                    //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                .success((data, status, headers, config) =>
                {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log(`ServerService: Successfully Post response [${ fileUrl }]`);
                    console.log(data);

                    if (successCallBack) { successCallBack(data); }
                    if (postDeferred) { postDeferred.resolve(data); }
                })
                .error((data, status, headers, config) =>
                {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.warn(`ServerService: Error in Post response [url=${ fileUrl }; status=${ status }]`);

                    if (postDeferred) { postDeferred.reject(status); }
                });
            }
            else
            {
                console.warn("ServerService: Error in httpPost method, request Url is empty");
            }
        };

        return serverService;
    }
};