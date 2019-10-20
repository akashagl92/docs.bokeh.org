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
      };var element = document.getElementById("a00f9322-71a3-4920-b35c-220137b30bae");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a00f9322-71a3-4920-b35c-220137b30bae' but no matching script tag was found. ")
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
                    var docs_json = {"a92900b8-1e5e-439b-946a-53e4e2985eb0":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c52f2d89-d27a-4932-8de0-0fd9464f900b","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a12d5fd4-ed33-4ef8-b787-36be96bf3009","type":"PanTool"},{"id":"8d5599b1-2d17-4140-954c-82d6f75e67b2","type":"WheelZoomTool"},{"id":"d1feb40b-9d89-44fd-8bb0-dd2748b92d71","type":"BoxZoomTool"},{"id":"eceee7e8-210e-4fbe-bc24-7be40dd4a59a","type":"SaveTool"},{"id":"7d43496e-bdf2-4a3b-8619-32db7f31b28a","type":"ResetTool"},{"id":"5862d2ab-cb9b-4638-8781-c35d81b0e156","type":"HelpTool"}]},"id":"6edcb102-9129-482a-a638-828d017b6b37","type":"Toolbar"},{"attributes":{},"id":"32102069-e529-4625-aa34-1e67b356b5f0","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"deda5a38-c459-4f6c-97c0-ef85b4fbcf5e","type":"ColumnDataSource"},{"attributes":{},"id":"5862d2ab-cb9b-4638-8781-c35d81b0e156","type":"HelpTool"},{"attributes":{"plot":null,"text":""},"id":"a5f23476-596c-4d59-85cc-743f32795041","type":"Title"},{"attributes":{"below":[{"id":"d8d78ecb-1327-46ca-a932-a0831398c54c","type":"LinearAxis"}],"left":[{"id":"1eeb68db-474c-4ec1-b41d-9727e17ff01a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d8d78ecb-1327-46ca-a932-a0831398c54c","type":"LinearAxis"},{"id":"1af7bbdb-38e8-4528-9538-f88c8957b6be","type":"Grid"},{"id":"1eeb68db-474c-4ec1-b41d-9727e17ff01a","type":"LinearAxis"},{"id":"857c72e1-a132-4ef0-905f-7879fbb12c36","type":"Grid"},{"id":"602776fd-ccaa-46f3-857b-d1abd95b080d","type":"BoxAnnotation"},{"id":"5fd50c63-24a7-46a9-8d91-20f691dc5222","type":"GlyphRenderer"}],"title":{"id":"a5f23476-596c-4d59-85cc-743f32795041","type":"Title"},"toolbar":{"id":"6edcb102-9129-482a-a638-828d017b6b37","type":"Toolbar"},"x_range":{"id":"473074e9-bf7c-4321-9c05-7659e27c7dbc","type":"DataRange1d"},"x_scale":{"id":"e1706cb3-40c2-4091-9a7a-8ce008389f18","type":"LinearScale"},"y_range":{"id":"8c95da56-1505-4bd7-8d1c-67349c02eb8f","type":"DataRange1d"},"y_scale":{"id":"058f442c-7d70-42c8-862a-10eb2bdccb68","type":"LinearScale"}},"id":"78ea56dc-709b-4707-b537-3b095fe03ba8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"8d5599b1-2d17-4140-954c-82d6f75e67b2","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"83fcf24e-d98a-42f5-92d6-1c1d46e7e2f6","type":"BasicTickFormatter"},"plot":{"id":"78ea56dc-709b-4707-b537-3b095fe03ba8","subtype":"Figure","type":"Plot"},"ticker":{"id":"66ffbd8a-4795-4db5-b571-8ac2c5124065","type":"BasicTicker"}},"id":"1eeb68db-474c-4ec1-b41d-9727e17ff01a","type":"LinearAxis"},{"attributes":{"data_source":{"id":"deda5a38-c459-4f6c-97c0-ef85b4fbcf5e","type":"ColumnDataSource"},"glyph":{"id":"c52f2d89-d27a-4932-8de0-0fd9464f900b","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ee191606-bdac-4bc0-b34b-4d651b6eb566","type":"Circle"},"selection_glyph":null,"view":{"id":"bfb71f74-e905-456d-a1a7-d7f37ea3471a","type":"CDSView"}},"id":"5fd50c63-24a7-46a9-8d91-20f691dc5222","type":"GlyphRenderer"},{"attributes":{},"id":"7d43496e-bdf2-4a3b-8619-32db7f31b28a","type":"ResetTool"},{"attributes":{"plot":{"id":"78ea56dc-709b-4707-b537-3b095fe03ba8","subtype":"Figure","type":"Plot"},"ticker":{"id":"32102069-e529-4625-aa34-1e67b356b5f0","type":"BasicTicker"}},"id":"1af7bbdb-38e8-4528-9538-f88c8957b6be","type":"Grid"},{"attributes":{},"id":"097f2de2-f4ce-4d54-b80b-d4ea19976269","type":"BasicTickFormatter"},{"attributes":{},"id":"66ffbd8a-4795-4db5-b571-8ac2c5124065","type":"BasicTicker"},{"attributes":{},"id":"e1706cb3-40c2-4091-9a7a-8ce008389f18","type":"LinearScale"},{"attributes":{"callback":null},"id":"8c95da56-1505-4bd7-8d1c-67349c02eb8f","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"602776fd-ccaa-46f3-857b-d1abd95b080d","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee191606-bdac-4bc0-b34b-4d651b6eb566","type":"Circle"},{"attributes":{},"id":"a12d5fd4-ed33-4ef8-b787-36be96bf3009","type":"PanTool"},{"attributes":{"source":{"id":"deda5a38-c459-4f6c-97c0-ef85b4fbcf5e","type":"ColumnDataSource"}},"id":"bfb71f74-e905-456d-a1a7-d7f37ea3471a","type":"CDSView"},{"attributes":{"callback":null},"id":"473074e9-bf7c-4321-9c05-7659e27c7dbc","type":"DataRange1d"},{"attributes":{"overlay":{"id":"602776fd-ccaa-46f3-857b-d1abd95b080d","type":"BoxAnnotation"}},"id":"d1feb40b-9d89-44fd-8bb0-dd2748b92d71","type":"BoxZoomTool"},{"attributes":{},"id":"058f442c-7d70-42c8-862a-10eb2bdccb68","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"78ea56dc-709b-4707-b537-3b095fe03ba8","subtype":"Figure","type":"Plot"},"ticker":{"id":"66ffbd8a-4795-4db5-b571-8ac2c5124065","type":"BasicTicker"}},"id":"857c72e1-a132-4ef0-905f-7879fbb12c36","type":"Grid"},{"attributes":{},"id":"eceee7e8-210e-4fbe-bc24-7be40dd4a59a","type":"SaveTool"},{"attributes":{"formatter":{"id":"097f2de2-f4ce-4d54-b80b-d4ea19976269","type":"BasicTickFormatter"},"plot":{"id":"78ea56dc-709b-4707-b537-3b095fe03ba8","subtype":"Figure","type":"Plot"},"ticker":{"id":"32102069-e529-4625-aa34-1e67b356b5f0","type":"BasicTicker"}},"id":"d8d78ecb-1327-46ca-a932-a0831398c54c","type":"LinearAxis"},{"attributes":{},"id":"83fcf24e-d98a-42f5-92d6-1c1d46e7e2f6","type":"BasicTickFormatter"}],"root_ids":["78ea56dc-709b-4707-b537-3b095fe03ba8"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a92900b8-1e5e-439b-946a-53e4e2985eb0","elementid":"a00f9322-71a3-4920-b35c-220137b30bae","modelid":"78ea56dc-709b-4707-b537-3b095fe03ba8"}];
                
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
