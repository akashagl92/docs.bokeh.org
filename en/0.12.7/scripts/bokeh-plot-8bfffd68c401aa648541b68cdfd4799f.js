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
      };var element = document.getElementById("4b9d72e5-6d30-40d3-ae8d-4cf901dbf987");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4b9d72e5-6d30-40d3-ae8d-4cf901dbf987' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"6f484595-da39-4d98-bf5d-ca144289b00c":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]}},"id":"b69194d2-f844-4ca5-9879-87da75b8642a","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"cb4f2b6b-2b0f-4b75-a6db-aa4c16bb3acf","type":"DataRange1d"},{"attributes":{"formatter":{"id":"ddb240da-c99f-4bb9-9df8-1893e9e99c4d","type":"FuncTickFormatter"},"plot":{"id":"74bb3dd5-b9e5-404a-9f2d-47e6924bbd60","subtype":"Figure","type":"Plot"},"ticker":{"id":"b394529a-0529-4b16-8fd6-6c83b9eabb9d","type":"BasicTicker"}},"id":"7880cfc5-510a-40e9-97c2-de3af6e1733f","type":"LinearAxis"},{"attributes":{"below":[{"id":"de99f8e0-4970-44c7-9662-40c3a120154e","type":"LinearAxis"}],"left":[{"id":"7880cfc5-510a-40e9-97c2-de3af6e1733f","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"de99f8e0-4970-44c7-9662-40c3a120154e","type":"LinearAxis"},{"id":"bb089103-5973-45b1-94cb-c0da15508aae","type":"Grid"},{"id":"7880cfc5-510a-40e9-97c2-de3af6e1733f","type":"LinearAxis"},{"id":"6489faf9-8c97-4f67-98ba-a74cec2c5e8e","type":"Grid"},{"id":"593ec12c-30e3-413a-8863-b906057969d8","type":"BoxAnnotation"},{"id":"1ccb0d4b-5fd2-44e8-8c57-a6ec1a5eac8e","type":"GlyphRenderer"}],"title":{"id":"a268e1c6-f9f0-4fed-8a83-38e9cc6e165e","type":"Title"},"toolbar":{"id":"e0714b74-35d8-4036-a1ce-50bb23e7c75f","type":"Toolbar"},"x_range":{"id":"cb4f2b6b-2b0f-4b75-a6db-aa4c16bb3acf","type":"DataRange1d"},"x_scale":{"id":"14f813c9-32e5-4a05-975c-e71ad6b73ce6","type":"LinearScale"},"y_range":{"id":"07db1b75-41a2-4de0-af70-c659e500b811","type":"DataRange1d"},"y_scale":{"id":"24630991-2083-4fd7-8cc5-d70393afb8e5","type":"LinearScale"}},"id":"74bb3dd5-b9e5-404a-9f2d-47e6924bbd60","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"593ec12c-30e3-413a-8863-b906057969d8","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7ba3b2aa-4798-4bd2-aa94-2714833316ca","type":"PanTool"},{"id":"e1abaad5-9983-4fbe-b038-c418198198fe","type":"WheelZoomTool"},{"id":"fc5484c0-95cb-4a4d-b97e-21dbaf479e47","type":"BoxZoomTool"},{"id":"113b341a-5233-4ad9-ad82-8eb943aa1119","type":"SaveTool"},{"id":"99370659-9109-4249-859b-6ddd227cc9db","type":"ResetTool"},{"id":"657e9d9e-58dc-4873-92f4-a9372de1d975","type":"HelpTool"}]},"id":"e0714b74-35d8-4036-a1ce-50bb23e7c75f","type":"Toolbar"},{"attributes":{},"id":"113b341a-5233-4ad9-ad82-8eb943aa1119","type":"SaveTool"},{"attributes":{"code":"\n    return Math.floor(tick) + \" + \" + (tick % 1).toFixed(2)\n"},"id":"ddb240da-c99f-4bb9-9df8-1893e9e99c4d","type":"FuncTickFormatter"},{"attributes":{"plot":{"id":"74bb3dd5-b9e5-404a-9f2d-47e6924bbd60","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b5cd828-027d-46d9-95bd-5512c4719be6","type":"BasicTicker"}},"id":"bb089103-5973-45b1-94cb-c0da15508aae","type":"Grid"},{"attributes":{},"id":"24630991-2083-4fd7-8cc5-d70393afb8e5","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"a268e1c6-f9f0-4fed-8a83-38e9cc6e165e","type":"Title"},{"attributes":{},"id":"c2e7faa9-32dc-43dc-800e-3e09622e9ff7","type":"BasicTickFormatter"},{"attributes":{},"id":"2b5cd828-027d-46d9-95bd-5512c4719be6","type":"BasicTicker"},{"attributes":{},"id":"e1abaad5-9983-4fbe-b038-c418198198fe","type":"WheelZoomTool"},{"attributes":{},"id":"7ba3b2aa-4798-4bd2-aa94-2714833316ca","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"b0328247-9960-4991-9036-ce05d2a12e14","type":"Circle"},{"attributes":{},"id":"657e9d9e-58dc-4873-92f4-a9372de1d975","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"74bb3dd5-b9e5-404a-9f2d-47e6924bbd60","subtype":"Figure","type":"Plot"},"ticker":{"id":"b394529a-0529-4b16-8fd6-6c83b9eabb9d","type":"BasicTicker"}},"id":"6489faf9-8c97-4f67-98ba-a74cec2c5e8e","type":"Grid"},{"attributes":{"callback":null},"id":"07db1b75-41a2-4de0-af70-c659e500b811","type":"DataRange1d"},{"attributes":{"formatter":{"id":"c2e7faa9-32dc-43dc-800e-3e09622e9ff7","type":"BasicTickFormatter"},"plot":{"id":"74bb3dd5-b9e5-404a-9f2d-47e6924bbd60","subtype":"Figure","type":"Plot"},"ticker":{"id":"2b5cd828-027d-46d9-95bd-5512c4719be6","type":"BasicTicker"}},"id":"de99f8e0-4970-44c7-9662-40c3a120154e","type":"LinearAxis"},{"attributes":{"data_source":{"id":"b69194d2-f844-4ca5-9879-87da75b8642a","type":"ColumnDataSource"},"glyph":{"id":"de08ce35-f3f7-4fb0-b5a7-5cd4c80f017f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b0328247-9960-4991-9036-ce05d2a12e14","type":"Circle"},"selection_glyph":null,"view":{"id":"663238b5-31a9-4690-bbd8-25b9cbbac1cd","type":"CDSView"}},"id":"1ccb0d4b-5fd2-44e8-8c57-a6ec1a5eac8e","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"593ec12c-30e3-413a-8863-b906057969d8","type":"BoxAnnotation"}},"id":"fc5484c0-95cb-4a4d-b97e-21dbaf479e47","type":"BoxZoomTool"},{"attributes":{"source":{"id":"b69194d2-f844-4ca5-9879-87da75b8642a","type":"ColumnDataSource"}},"id":"663238b5-31a9-4690-bbd8-25b9cbbac1cd","type":"CDSView"},{"attributes":{},"id":"14f813c9-32e5-4a05-975c-e71ad6b73ce6","type":"LinearScale"},{"attributes":{},"id":"b394529a-0529-4b16-8fd6-6c83b9eabb9d","type":"BasicTicker"},{"attributes":{},"id":"99370659-9109-4249-859b-6ddd227cc9db","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"de08ce35-f3f7-4fb0-b5a7-5cd4c80f017f","type":"Circle"}],"root_ids":["74bb3dd5-b9e5-404a-9f2d-47e6924bbd60"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"6f484595-da39-4d98-bf5d-ca144289b00c","elementid":"4b9d72e5-6d30-40d3-ae8d-4cf901dbf987","modelid":"74bb3dd5-b9e5-404a-9f2d-47e6924bbd60"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
