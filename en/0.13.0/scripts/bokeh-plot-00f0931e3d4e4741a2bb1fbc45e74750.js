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
      };var element = document.getElementById("7ac73972-1af3-4234-9171-b68cf71b7e50");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7ac73972-1af3-4234-9171-b68cf71b7e50' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"8ee52ab5-e308-4431-bb01-5f97461ba82f":{"roots":{"references":[{"attributes":{"callback":null},"id":"bfa6ee73-1259-4706-8d36-c2348d38ad12","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"8f4100cc-6d0c-4a28-9cfd-208dd3e67da8","type":"Circle"},{"attributes":{},"id":"008b25ac-8e0a-4e1f-b7fa-ba7589046d3a","type":"BasicTicker"},{"attributes":{},"id":"c3197c7d-352f-43ac-ad51-d736b592614a","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"c395dc7e-068b-4482-891f-38c66d27f865","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7141ed3-6e25-4934-af79-ce3c48e3d8fa","type":"BasicTicker"}},"id":"879d1049-db3e-4f63-89b4-9caefa8d764a","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d25b32df-a789-4fad-b857-af0f24a17ab7","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"bfc9d103-0254-433d-b178-2546873e19b2","type":"PanTool"},{"id":"38041f9d-3ffb-4ec2-9183-f5277ca15999","type":"WheelZoomTool"},{"id":"d9e0acc2-4b91-446b-a902-40b18d34758f","type":"BoxZoomTool"},{"id":"7f77e54c-ccc3-477c-8193-dd9fc7121619","type":"SaveTool"},{"id":"1e234c69-9d2d-4f29-a96d-485174595da9","type":"ResetTool"},{"id":"cf7adce3-a5fd-4962-81fc-5e7789bdb9f5","type":"HelpTool"}]},"id":"a37edfb4-6ce2-4e54-bc46-2f4fd153f623","type":"Toolbar"},{"attributes":{},"id":"bfc9d103-0254-433d-b178-2546873e19b2","type":"PanTool"},{"attributes":{},"id":"2d03b85b-db2a-47cb-8271-bbcd6689cd7d","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f9fa22f4-8f70-4682-b110-e4162f605614","type":"DataRange1d"},{"attributes":{},"id":"9d1d53a7-2b94-4dee-b962-72bcb2543269","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2d03b85b-db2a-47cb-8271-bbcd6689cd7d","type":"BasicTickFormatter"},"plot":{"id":"c395dc7e-068b-4482-891f-38c66d27f865","subtype":"Figure","type":"Plot"},"ticker":{"id":"f7141ed3-6e25-4934-af79-ce3c48e3d8fa","type":"BasicTicker"}},"id":"aa2c6141-c0bc-4e5f-b79a-aaf945514b11","type":"LinearAxis"},{"attributes":{},"id":"59fd1a91-0fc0-47f0-b8a8-60a154cf8dc5","type":"Selection"},{"attributes":{"data_source":{"id":"66e19548-bc07-4471-90c3-55982961deeb","type":"ColumnDataSource"},"glyph":{"id":"7491ce59-3799-4ce8-8e67-96458a31eb83","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"8f4100cc-6d0c-4a28-9cfd-208dd3e67da8","type":"Circle"},"selection_glyph":null,"view":{"id":"9f76b00d-668d-49ca-971c-346e4cfd2e05","type":"CDSView"}},"id":"e1d85893-b494-4c90-bd87-985b44488f96","type":"GlyphRenderer"},{"attributes":{},"id":"f65c3efe-e8d1-4b66-9968-e4706bbf21da","type":"LinearScale"},{"attributes":{},"id":"38041f9d-3ffb-4ec2-9183-f5277ca15999","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"d25b32df-a789-4fad-b857-af0f24a17ab7","type":"BoxAnnotation"}},"id":"d9e0acc2-4b91-446b-a902-40b18d34758f","type":"BoxZoomTool"},{"attributes":{},"id":"7f77e54c-ccc3-477c-8193-dd9fc7121619","type":"SaveTool"},{"attributes":{"below":[{"id":"85e67f83-7116-481f-bbb5-4ef33cfde6c1","type":"LinearAxis"}],"left":[{"id":"aa2c6141-c0bc-4e5f-b79a-aaf945514b11","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"85e67f83-7116-481f-bbb5-4ef33cfde6c1","type":"LinearAxis"},{"id":"bb4f5c83-a5d2-4dad-983d-db286ef59493","type":"Grid"},{"id":"aa2c6141-c0bc-4e5f-b79a-aaf945514b11","type":"LinearAxis"},{"id":"879d1049-db3e-4f63-89b4-9caefa8d764a","type":"Grid"},{"id":"d25b32df-a789-4fad-b857-af0f24a17ab7","type":"BoxAnnotation"},{"id":"e1d85893-b494-4c90-bd87-985b44488f96","type":"GlyphRenderer"}],"title":{"id":"eb775c4f-2c3c-4bcb-815c-1c62098d3712","type":"Title"},"toolbar":{"id":"a37edfb4-6ce2-4e54-bc46-2f4fd153f623","type":"Toolbar"},"x_range":{"id":"bfa6ee73-1259-4706-8d36-c2348d38ad12","type":"DataRange1d"},"x_scale":{"id":"f65c3efe-e8d1-4b66-9968-e4706bbf21da","type":"LinearScale"},"y_range":{"id":"f9fa22f4-8f70-4682-b110-e4162f605614","type":"DataRange1d"},"y_scale":{"id":"c3197c7d-352f-43ac-ad51-d736b592614a","type":"LinearScale"}},"id":"c395dc7e-068b-4482-891f-38c66d27f865","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1e234c69-9d2d-4f29-a96d-485174595da9","type":"ResetTool"},{"attributes":{"plot":{"id":"c395dc7e-068b-4482-891f-38c66d27f865","subtype":"Figure","type":"Plot"},"ticker":{"id":"008b25ac-8e0a-4e1f-b7fa-ba7589046d3a","type":"BasicTicker"}},"id":"bb4f5c83-a5d2-4dad-983d-db286ef59493","type":"Grid"},{"attributes":{},"id":"cf7adce3-a5fd-4962-81fc-5e7789bdb9f5","type":"HelpTool"},{"attributes":{"formatter":{"id":"9d1d53a7-2b94-4dee-b962-72bcb2543269","type":"BasicTickFormatter"},"plot":{"id":"c395dc7e-068b-4482-891f-38c66d27f865","subtype":"Figure","type":"Plot"},"ticker":{"id":"008b25ac-8e0a-4e1f-b7fa-ba7589046d3a","type":"BasicTicker"}},"id":"85e67f83-7116-481f-bbb5-4ef33cfde6c1","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"59fd1a91-0fc0-47f0-b8a8-60a154cf8dc5","type":"Selection"},"selection_policy":{"id":"82e1ab23-714a-410a-95bb-c5630cf63211","type":"UnionRenderers"}},"id":"66e19548-bc07-4471-90c3-55982961deeb","type":"ColumnDataSource"},{"attributes":{"source":{"id":"66e19548-bc07-4471-90c3-55982961deeb","type":"ColumnDataSource"}},"id":"9f76b00d-668d-49ca-971c-346e4cfd2e05","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"eb775c4f-2c3c-4bcb-815c-1c62098d3712","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_color":{"value":"firebrick"},"line_dash":[6,3],"line_width":{"value":2},"size":{"units":"screen","value":60},"x":{"field":"x"},"y":{"field":"y"}},"id":"7491ce59-3799-4ce8-8e67-96458a31eb83","type":"Circle"},{"attributes":{},"id":"82e1ab23-714a-410a-95bb-c5630cf63211","type":"UnionRenderers"},{"attributes":{},"id":"f7141ed3-6e25-4934-af79-ce3c48e3d8fa","type":"BasicTicker"}],"root_ids":["c395dc7e-068b-4482-891f-38c66d27f865"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"8ee52ab5-e308-4431-bb01-5f97461ba82f","roots":{"c395dc7e-068b-4482-891f-38c66d27f865":"7ac73972-1af3-4234-9171-b68cf71b7e50"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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