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
      };var element = document.getElementById("9bbb2433-9a99-47f3-9574-94d7a1cb9727");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9bbb2433-9a99-47f3-9574-94d7a1cb9727' but no matching script tag was found. ")
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
                    var docs_json = {"8bc83924-5d77-4c43-a836-4b77724a162f":{"roots":{"references":[{"attributes":{"formatter":{"id":"f2aec1cc-24f3-446c-b0ac-188f9c664300","type":"BasicTickFormatter"},"plot":{"id":"20354c71-4ef6-4194-a852-e89da89740bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed2b3236-9966-4434-bc13-3e8c3ef89e8c","type":"BasicTicker"}},"id":"08cbb079-7bd5-40cb-bb0b-aa6054bb8693","type":"LinearAxis"},{"attributes":{"source":{"id":"f3a5df14-d828-4e1d-ac87-c28edae4610e","type":"ColumnDataSource"}},"id":"da0ffd76-1c85-4a1f-8612-66c1362b947c","type":"CDSView"},{"attributes":{},"id":"ed2b3236-9966-4434-bc13-3e8c3ef89e8c","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"7b1d95af-bd00-4a94-9b8a-000a9bcc4460","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"20354c71-4ef6-4194-a852-e89da89740bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"ed2b3236-9966-4434-bc13-3e8c3ef89e8c","type":"BasicTicker"}},"id":"670d2dca-a70a-4e20-bcd7-745a43e8954d","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d60bc09d-42c0-4d12-a6a0-41da004e544a","type":"Square"},{"attributes":{},"id":"f2aec1cc-24f3-446c-b0ac-188f9c664300","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","size"],"data":{"size":[10,20,30],"x":[1,2,3],"y":[1,2,3]}},"id":"f3a5df14-d828-4e1d-ac87-c28edae4610e","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8533a65d-ac19-4d8b-b639-acfc1a8e8619","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"353f3475-4c2a-4552-b0bb-9b9330cb426a","type":"LinearAxis"}],"left":[{"id":"08cbb079-7bd5-40cb-bb0b-aa6054bb8693","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"353f3475-4c2a-4552-b0bb-9b9330cb426a","type":"LinearAxis"},{"id":"1582fa88-82af-43a1-86c7-696941e56590","type":"Grid"},{"id":"08cbb079-7bd5-40cb-bb0b-aa6054bb8693","type":"LinearAxis"},{"id":"670d2dca-a70a-4e20-bcd7-745a43e8954d","type":"Grid"},{"id":"8533a65d-ac19-4d8b-b639-acfc1a8e8619","type":"BoxAnnotation"},{"id":"41c9713b-aa10-47a8-8a3a-af1d64e6a5f4","type":"GlyphRenderer"}],"title":{"id":"7b1d95af-bd00-4a94-9b8a-000a9bcc4460","type":"Title"},"toolbar":{"id":"aceaec3b-2b18-49c1-95aa-34e0a1ebd877","type":"Toolbar"},"x_range":{"id":"28e12afd-65d2-4b89-82bd-7bbde778bb3c","type":"DataRange1d"},"x_scale":{"id":"f84ca882-09dc-4267-8dfa-f56575ddb8ef","type":"LinearScale"},"y_range":{"id":"5c21deff-39b8-4f91-b6a3-31405c809a46","type":"DataRange1d"},"y_scale":{"id":"db6d0b03-42e0-4383-8550-d84ca09a739a","type":"LinearScale"}},"id":"20354c71-4ef6-4194-a852-e89da89740bf","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"930d458a-113c-4f5c-9c85-49ebdb50a20b","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"930d458a-113c-4f5c-9c85-49ebdb50a20b","type":"PanTool"},{"id":"69b1597e-2118-43fb-a767-4e98d93e9e77","type":"WheelZoomTool"},{"id":"4a9f35d6-1cd6-4cfd-8b51-b2575e26e802","type":"BoxZoomTool"},{"id":"711b7c5f-0665-4f39-8a2b-d4e7d235b1e5","type":"SaveTool"},{"id":"1d2f6c28-b221-4e67-8352-626f8aa824e3","type":"ResetTool"},{"id":"1a1fa1b1-a5d8-45ae-ac7a-fd6645798b30","type":"HelpTool"}]},"id":"aceaec3b-2b18-49c1-95aa-34e0a1ebd877","type":"Toolbar"},{"attributes":{"data_source":{"id":"f3a5df14-d828-4e1d-ac87-c28edae4610e","type":"ColumnDataSource"},"glyph":{"id":"0695e38d-2198-41d0-9762-e1b42852c300","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d60bc09d-42c0-4d12-a6a0-41da004e544a","type":"Square"},"selection_glyph":null,"view":{"id":"da0ffd76-1c85-4a1f-8612-66c1362b947c","type":"CDSView"}},"id":"41c9713b-aa10-47a8-8a3a-af1d64e6a5f4","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"28e12afd-65d2-4b89-82bd-7bbde778bb3c","type":"DataRange1d"},{"attributes":{},"id":"69b1597e-2118-43fb-a767-4e98d93e9e77","type":"WheelZoomTool"},{"attributes":{},"id":"c6a4221b-fc10-4be6-b3c5-cb2f1d6aa526","type":"BasicTicker"},{"attributes":{"overlay":{"id":"8533a65d-ac19-4d8b-b639-acfc1a8e8619","type":"BoxAnnotation"}},"id":"4a9f35d6-1cd6-4cfd-8b51-b2575e26e802","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#74ADD1"},"line_color":{"value":"#74ADD1"},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0695e38d-2198-41d0-9762-e1b42852c300","type":"Square"},{"attributes":{},"id":"711b7c5f-0665-4f39-8a2b-d4e7d235b1e5","type":"SaveTool"},{"attributes":{"formatter":{"id":"c3f086e3-1cbb-4d88-bf52-6c59885d2f75","type":"BasicTickFormatter"},"plot":{"id":"20354c71-4ef6-4194-a852-e89da89740bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6a4221b-fc10-4be6-b3c5-cb2f1d6aa526","type":"BasicTicker"}},"id":"353f3475-4c2a-4552-b0bb-9b9330cb426a","type":"LinearAxis"},{"attributes":{},"id":"1d2f6c28-b221-4e67-8352-626f8aa824e3","type":"ResetTool"},{"attributes":{"callback":null},"id":"5c21deff-39b8-4f91-b6a3-31405c809a46","type":"DataRange1d"},{"attributes":{},"id":"1a1fa1b1-a5d8-45ae-ac7a-fd6645798b30","type":"HelpTool"},{"attributes":{},"id":"f84ca882-09dc-4267-8dfa-f56575ddb8ef","type":"LinearScale"},{"attributes":{},"id":"db6d0b03-42e0-4383-8550-d84ca09a739a","type":"LinearScale"},{"attributes":{},"id":"c3f086e3-1cbb-4d88-bf52-6c59885d2f75","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"20354c71-4ef6-4194-a852-e89da89740bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"c6a4221b-fc10-4be6-b3c5-cb2f1d6aa526","type":"BasicTicker"}},"id":"1582fa88-82af-43a1-86c7-696941e56590","type":"Grid"}],"root_ids":["20354c71-4ef6-4194-a852-e89da89740bf"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"8bc83924-5d77-4c43-a836-4b77724a162f","elementid":"9bbb2433-9a99-47f3-9574-94d7a1cb9727","modelid":"20354c71-4ef6-4194-a852-e89da89740bf"}];
                
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
