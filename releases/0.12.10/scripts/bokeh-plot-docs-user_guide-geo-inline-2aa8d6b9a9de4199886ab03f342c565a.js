(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("d7ddbad3-100f-4f22-820d-0f1b94ef3c19");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd7ddbad3-100f-4f22-820d-0f1b94ef3c19' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"ca083ed3-f079-48eb-b15a-18a769e009a1":{"roots":{"references":[{"attributes":{},"id":"6621cbdd-ca04-4e0b-8a48-4a859750c94d","type":"PanTool"},{"attributes":{"formatter":{"id":"1cfd2be2-d809-4d33-9834-297d7aa5b311","type":"BasicTickFormatter"},"plot":{"id":"ea735601-2bbc-4610-bff9-31c835fde567","subtype":"Figure","type":"Plot"},"ticker":{"id":"0631c8a9-def5-46dc-8b1e-e4fd35aebf6f","type":"BasicTicker"},"visible":false},"id":"8ceacd59-1b55-4f38-9d1c-12703c4d4dde","type":"LinearAxis"},{"attributes":{},"id":"0631c8a9-def5-46dc-8b1e-e4fd35aebf6f","type":"BasicTicker"},{"attributes":{},"id":"38fbea99-ccd2-4a70-9b53-48c93bcf5436","type":"BasicTickFormatter"},{"attributes":{},"id":"c6900cfc-1a2a-486f-9fff-544fc04e1234","type":"LinearScale"},{"attributes":{"below":[{"id":"8ceacd59-1b55-4f38-9d1c-12703c4d4dde","type":"LinearAxis"}],"left":[{"id":"6e9ca9fd-a345-44fe-ac38-03980edaf5b8","type":"LinearAxis"}],"renderers":[{"id":"8ceacd59-1b55-4f38-9d1c-12703c4d4dde","type":"LinearAxis"},{"id":"7e9cc594-9611-4ba7-a01c-f3e2be766282","type":"Grid"},{"id":"6e9ca9fd-a345-44fe-ac38-03980edaf5b8","type":"LinearAxis"},{"id":"0b0e8bb0-ef12-4b63-ab86-573d3072d906","type":"Grid"},{"id":"7171e55d-d822-46bb-9bf3-0d019a2b3a7c","type":"TileRenderer"}],"title":{"id":"a61d471f-12cb-4951-884c-c01e364a6641","type":"Title"},"toolbar":{"id":"e5fed4cd-4aa4-4c1e-812b-9550c408eb7a","type":"Toolbar"},"x_range":{"id":"2817188d-ad56-4393-baca-7ec9b5f50bed","type":"Range1d"},"x_scale":{"id":"c6900cfc-1a2a-486f-9fff-544fc04e1234","type":"LinearScale"},"y_range":{"id":"b294ab6a-227e-4836-a5a7-c40e276dbb54","type":"Range1d"},"y_scale":{"id":"1e952e00-810a-414f-91a3-aaffea44bfda","type":"LinearScale"}},"id":"ea735601-2bbc-4610-bff9-31c835fde567","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f77d06f5-88ba-4735-82b3-014cf8d0f5e5","type":"WheelZoomTool"},{"attributes":{},"id":"1e952e00-810a-414f-91a3-aaffea44bfda","type":"LinearScale"},{"attributes":{"formatter":{"id":"38fbea99-ccd2-4a70-9b53-48c93bcf5436","type":"BasicTickFormatter"},"plot":{"id":"ea735601-2bbc-4610-bff9-31c835fde567","subtype":"Figure","type":"Plot"},"ticker":{"id":"e33f232b-88ed-4b5b-82d9-421f8e35d8e9","type":"BasicTicker"},"visible":false},"id":"6e9ca9fd-a345-44fe-ac38-03980edaf5b8","type":"LinearAxis"},{"attributes":{"attribution":"Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>. Data by <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a href=\"http://www.openstreetmap.org/copyright\">ODbL</a>.","url":"http://tile.stamen.com/toner/{Z}/{X}/{Y}.png"},"id":"da844151-f688-4601-8fc7-59d6ae1b9ca8","type":"WMTSTileSource"},{"attributes":{"dimension":1,"plot":{"id":"ea735601-2bbc-4610-bff9-31c835fde567","subtype":"Figure","type":"Plot"},"ticker":{"id":"e33f232b-88ed-4b5b-82d9-421f8e35d8e9","type":"BasicTicker"}},"id":"0b0e8bb0-ef12-4b63-ab86-573d3072d906","type":"Grid"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"2817188d-ad56-4393-baca-7ec9b5f50bed","type":"Range1d"},{"attributes":{},"id":"1cfd2be2-d809-4d33-9834-297d7aa5b311","type":"BasicTickFormatter"},{"attributes":{},"id":"e33f232b-88ed-4b5b-82d9-421f8e35d8e9","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"a61d471f-12cb-4951-884c-c01e364a6641","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6621cbdd-ca04-4e0b-8a48-4a859750c94d","type":"PanTool"},{"id":"f77d06f5-88ba-4735-82b3-014cf8d0f5e5","type":"WheelZoomTool"}]},"id":"e5fed4cd-4aa4-4c1e-812b-9550c408eb7a","type":"Toolbar"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"b294ab6a-227e-4836-a5a7-c40e276dbb54","type":"Range1d"},{"attributes":{"tile_source":{"id":"da844151-f688-4601-8fc7-59d6ae1b9ca8","type":"WMTSTileSource"}},"id":"7171e55d-d822-46bb-9bf3-0d019a2b3a7c","type":"TileRenderer"},{"attributes":{"plot":{"id":"ea735601-2bbc-4610-bff9-31c835fde567","subtype":"Figure","type":"Plot"},"ticker":{"id":"0631c8a9-def5-46dc-8b1e-e4fd35aebf6f","type":"BasicTicker"}},"id":"7e9cc594-9611-4ba7-a01c-f3e2be766282","type":"Grid"}],"root_ids":["ea735601-2bbc-4610-bff9-31c835fde567"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"ca083ed3-f079-48eb-b15a-18a769e009a1","elementid":"d7ddbad3-100f-4f22-820d-0f1b94ef3c19","modelid":"ea735601-2bbc-4610-bff9-31c835fde567"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
