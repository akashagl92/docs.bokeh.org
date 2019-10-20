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
      };var element = document.getElementById("368696cc-cae9-4341-b941-7524554be5d5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '368696cc-cae9-4341-b941-7524554be5d5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d55eb7d0-de56-4ffe-ba3a-e6e5667232ff":{"roots":{"references":[{"attributes":{},"id":"14faccfb-14cb-4c86-b9fd-a10d4d451a68","type":"LinearScale"},{"attributes":{"axis_label":null,"formatter":{"id":"f2ead9d8-72a1-4549-bd38-42b44a365c89","type":"BasicTickFormatter"},"plot":{"id":"472db701-44ba-4143-b94d-c48daf2ab8a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"0afb3f64-92e7-40c2-90e1-f056504a292b","type":"BasicTicker"},"visible":false},"id":"48a7b5a8-d287-4224-a908-1e110fab40e2","type":"LinearAxis"},{"attributes":{"data_source":{"id":"63a4a9a6-fb22-466d-9ec8-ce2c72a8541d","type":"ColumnDataSource"},"glyph":{"id":"df32c13d-6cfc-4082-a816-31652530413e","type":"Wedge"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c196c700-133f-4ea8-b913-3864268a0929","type":"Wedge"},"selection_glyph":null,"view":{"id":"bae6cd76-74ec-44d0-a474-64a0dbe0eba5","type":"CDSView"}},"id":"838b8d75-9406-42bd-a7ca-a709835ac14b","type":"GlyphRenderer"},{"attributes":{"source":{"id":"63a4a9a6-fb22-466d-9ec8-ce2c72a8541d","type":"ColumnDataSource"}},"id":"bae6cd76-74ec-44d0-a474-64a0dbe0eba5","type":"CDSView"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"472db701-44ba-4143-b94d-c48daf2ab8a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e90e699-ad2d-414a-b0be-1b7603fcd0e3","type":"BasicTicker"}},"id":"4de5c9de-3e27-453a-a592-b168171359df","type":"Grid"},{"attributes":{"field":"angle"},"id":"647a9e81-c4a5-470c-999b-8ec6a4927021","type":"CumSum"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"7bfea091-6dc5-40a6-9767-b61cc92488e7","type":"HoverTool"}]},"id":"5183f160-9636-4ff6-9bdd-f24ee14ab150","type":"Toolbar"},{"attributes":{},"id":"0afb3f64-92e7-40c2-90e1-f056504a292b","type":"BasicTicker"},{"attributes":{},"id":"db751cb0-49b0-4736-98f0-68b3b73b7b4d","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"1c5fe2a7-2dd9-44a9-8479-fefd7a691fdf","type":"DataRange1d"},{"attributes":{"axis_label":null,"formatter":{"id":"db751cb0-49b0-4736-98f0-68b3b73b7b4d","type":"BasicTickFormatter"},"plot":{"id":"472db701-44ba-4143-b94d-c48daf2ab8a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e90e699-ad2d-414a-b0be-1b7603fcd0e3","type":"BasicTicker"},"visible":false},"id":"678a1131-2717-4f3e-bc15-4b87d0d60e60","type":"LinearAxis"},{"attributes":{"below":[{"id":"678a1131-2717-4f3e-bc15-4b87d0d60e60","type":"LinearAxis"}],"left":[{"id":"48a7b5a8-d287-4224-a908-1e110fab40e2","type":"LinearAxis"}],"plot_height":350,"renderers":[{"id":"678a1131-2717-4f3e-bc15-4b87d0d60e60","type":"LinearAxis"},{"id":"4de5c9de-3e27-453a-a592-b168171359df","type":"Grid"},{"id":"48a7b5a8-d287-4224-a908-1e110fab40e2","type":"LinearAxis"},{"id":"a0ec3522-3cfd-496f-9a4c-1db330979c24","type":"Grid"},{"id":"c02008f0-8d45-4076-aa0b-f82587db79a9","type":"Legend"},{"id":"838b8d75-9406-42bd-a7ca-a709835ac14b","type":"GlyphRenderer"}],"title":{"id":"c4bf9d0b-8f82-41d8-b81a-0ad99477e1d9","type":"Title"},"toolbar":{"id":"5183f160-9636-4ff6-9bdd-f24ee14ab150","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1c5fe2a7-2dd9-44a9-8479-fefd7a691fdf","type":"DataRange1d"},"x_scale":{"id":"c7eb7856-5870-4a77-afb0-4bb17c24273b","type":"LinearScale"},"y_range":{"id":"f296e1dd-55a5-42b2-8c56-8589b1e452f5","type":"DataRange1d"},"y_scale":{"id":"14faccfb-14cb-4c86-b9fd-a10d4d451a68","type":"LinearScale"}},"id":"472db701-44ba-4143-b94d-c48daf2ab8a1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f2ead9d8-72a1-4549-bd38-42b44a365c89","type":"BasicTickFormatter"},{"attributes":{},"id":"b40feb04-14b4-44fb-94c8-004ac30f6ee8","type":"UnionRenderers"},{"attributes":{"items":[{"id":"f4c4b429-792a-4f68-9450-bd5d2a342a57","type":"LegendItem"}],"plot":{"id":"472db701-44ba-4143-b94d-c48daf2ab8a1","subtype":"Figure","type":"Plot"}},"id":"c02008f0-8d45-4076-aa0b-f82587db79a9","type":"Legend"},{"attributes":{"end_angle":{"expr":{"id":"647a9e81-c4a5-470c-999b-8ec6a4927021","type":"CumSum"},"units":"rad"},"fill_color":{"field":"color"},"line_color":{"value":"white"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"2138157b-69fc-46c2-a89f-f7f89340237f","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"df32c13d-6cfc-4082-a816-31652530413e","type":"Wedge"},{"attributes":{"label":{"field":"country"},"renderers":[{"id":"838b8d75-9406-42bd-a7ca-a709835ac14b","type":"GlyphRenderer"}]},"id":"f4c4b429-792a-4f68-9450-bd5d2a342a57","type":"LegendItem"},{"attributes":{"callback":null,"data":{"angle":{"__ndarray__":"eQLEMwAC9z+3V8R09kHrP+QcmNXVFeo/hZ74ygF34j8vDs2tzcrZP1vToA6tntg/iJh0b4xy1z93BYbhOoTUPzmtw/IJwtI/0I8to/kr0j/Qjy2j+SvSP/xUAQTZ/9A/","dtype":"float64","shape":[12]},"color":["#3182bd","#6baed6","#9ecae1","#c6dbef","#e6550d","#fd8d3c","#fdae6b","#fdd0a2","#31a354","#74c476","#a1d99b","#c7e9c0"],"country":["United States","United Kingdom","Japan","China","Germany","India","Italy","Australia","Brazil","France","Taiwan","Spain"],"index":["0","1","2","3","4","5","6","7","8","9","10","11"],"value":[157,93,89,63,44,42,40,35,32,31,31,29]},"selected":{"id":"7c6ecf4a-f790-45ef-8a73-e8e9e291e55c","type":"Selection"},"selection_policy":{"id":"b40feb04-14b4-44fb-94c8-004ac30f6ee8","type":"UnionRenderers"}},"id":"63a4a9a6-fb22-466d-9ec8-ce2c72a8541d","type":"ColumnDataSource"},{"attributes":{},"id":"c7eb7856-5870-4a77-afb0-4bb17c24273b","type":"LinearScale"},{"attributes":{"callback":null},"id":"f296e1dd-55a5-42b2-8c56-8589b1e452f5","type":"DataRange1d"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"472db701-44ba-4143-b94d-c48daf2ab8a1","subtype":"Figure","type":"Plot"},"ticker":{"id":"0afb3f64-92e7-40c2-90e1-f056504a292b","type":"BasicTicker"}},"id":"a0ec3522-3cfd-496f-9a4c-1db330979c24","type":"Grid"},{"attributes":{"field":"angle","include_zero":true},"id":"2138157b-69fc-46c2-a89f-f7f89340237f","type":"CumSum"},{"attributes":{"end_angle":{"expr":{"id":"647a9e81-c4a5-470c-999b-8ec6a4927021","type":"CumSum"},"units":"rad"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.4},"start_angle":{"expr":{"id":"2138157b-69fc-46c2-a89f-f7f89340237f","type":"CumSum"},"units":"rad"},"x":{"value":0},"y":{"value":1}},"id":"c196c700-133f-4ea8-b913-3864268a0929","type":"Wedge"},{"attributes":{"plot":null,"text":"Pie Chart"},"id":"c4bf9d0b-8f82-41d8-b81a-0ad99477e1d9","type":"Title"},{"attributes":{"callback":null,"renderers":"auto","tooltips":"@country: @value"},"id":"7bfea091-6dc5-40a6-9767-b61cc92488e7","type":"HoverTool"},{"attributes":{},"id":"5e90e699-ad2d-414a-b0be-1b7603fcd0e3","type":"BasicTicker"},{"attributes":{},"id":"7c6ecf4a-f790-45ef-8a73-e8e9e291e55c","type":"Selection"}],"root_ids":["472db701-44ba-4143-b94d-c48daf2ab8a1"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d55eb7d0-de56-4ffe-ba3a-e6e5667232ff","roots":{"472db701-44ba-4143-b94d-c48daf2ab8a1":"368696cc-cae9-4341-b941-7524554be5d5"}}];
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