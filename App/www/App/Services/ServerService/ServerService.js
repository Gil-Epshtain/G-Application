/* Created by Gil on 23/02/2016 */

'use strict';

module.exports = (ngModule) =>
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

        var serverService = {};

        // Get
        serverService.httpGet = function(fileUrl, getDeferred, successCallBack)
        {
            console.log("ServerService: Sending Get request [" + fileUrl + "]");

            $http({
                method: 'GET',
                url: fileUrl
            })
                .success(function (data)
                {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log("ServerService: Successfully Get response [" + fileUrl + "]");
                    console.log(data);

                    if (successCallBack) { successCallBack(data); }
                    if (getDeferred) { getDeferred.resolve(data); }
                })
                .error(function (data, status, headers, config)
                {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.warn("ServerService: Error in Get response [url=" + fileUrl + "; status=" + status + "]");

                    if (getDeferred) { getDeferred.reject(status); }
                });
        };

        // Post
        serverService.httpPost = function (fileUrl, requestData, successCallBack, postDeferred)
        {
            console.log("ServerService: Sending Post request [" + fileUrl + "]");

            $http({
                method: 'POST',
                url: fileUrl,
                data: requestData
                //headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).
            success(function (data, status, headers, config)
            {
                // this callback will be called asynchronously
                // when the response is available
                console.log("ServerService: Successfully Post response [" + fileUrl + "]");
                console.log(data);

                if (successCallBack) { successCallBack(data); }
                if (postDeferred) { postDeferred.resolve(); }
            }).
            error(function (data, status, headers, config)
            {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.warn("ServerService: Error in Post response [url=" + fileUrl + "; status=" + status + "]");

                if (postDeferred) { postDeferred.reject(); }
            });
        };

        return serverService;
    }
};