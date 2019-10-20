(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("8d7c26e8-a361-42d0-81dc-dbf10a8f4e4f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d7c26e8-a361-42d0-81dc-dbf10a8f4e4f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"9fed982f-6237-433d-bc22-cbacb1079df3":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c6600e58-03d6-440a-9c3f-dc1fe5080bf7","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11b83569-9dcb-42df-b71d-7094757453d1","type":"BoxAnnotation"},{"attributes":{},"id":"acd5b318-c48f-4c39-9047-a5ec7fc1d93a","type":"BasicTicker"},{"attributes":{"plot":{"id":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0","subtype":"Figure","type":"Plot"}},"id":"598855bc-7bfd-451f-9b00-7a1ea3687116","type":"SaveTool"},{"attributes":{"below":[{"id":"3a83ff8c-21b9-49c6-8618-9002cf20c659","type":"LinearAxis"}],"left":[{"id":"9fb21e2e-1924-4461-b437-6a21dc919414","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3a83ff8c-21b9-49c6-8618-9002cf20c659","type":"LinearAxis"},{"id":"b290653e-f15f-4191-9906-6523ca7670ef","type":"Grid"},{"id":"9fb21e2e-1924-4461-b437-6a21dc919414","type":"LinearAxis"},{"id":"ae856f6e-109c-4760-b029-0e0437634b68","type":"Grid"},{"id":"11b83569-9dcb-42df-b71d-7094757453d1","type":"BoxAnnotation"},{"id":"2d811567-df65-44e8-b119-cab49b2fd38f","type":"GlyphRenderer"}],"title":{"id":"174a13c8-d85a-4ca9-94fe-f015f029071e","type":"Title"},"tool_events":{"id":"ade80918-e41d-470b-8c18-2f6a076eb421","type":"ToolEvents"},"toolbar":{"id":"783fa29a-4669-40eb-9e47-6fe7a6c73482","type":"Toolbar"},"x_range":{"id":"e019b128-3eba-405c-af36-01a813c51447","type":"DataRange1d"},"x_scale":{"id":"b5e784c4-3d4b-445c-bba6-e2c0752df308","type":"LinearScale"},"y_range":{"id":"463ba168-03ab-4fb8-ab06-db3d8734f3a6","type":"DataRange1d"},"y_scale":{"id":"0796ebd5-11af-46ba-931b-f1dcc248c670","type":"LinearScale"}},"id":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0","subtype":"Figure","type":"Plot"}},"id":"632689d3-8f7a-401c-8b0f-a746d697a3b4","type":"PanTool"},{"attributes":{},"id":"ade80918-e41d-470b-8c18-2f6a076eb421","type":"ToolEvents"},{"attributes":{"plot":{"id":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0","subtype":"Figure","type":"Plot"}},"id":"9f19f3ff-1b70-44d9-b8b0-b7b73d1307aa","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"acd5b318-c48f-4c39-9047-a5ec7fc1d93a","type":"BasicTicker"}},"id":"ae856f6e-109c-4760-b029-0e0437634b68","type":"Grid"},{"attributes":{},"id":"0eeb9a67-daed-4795-9b67-34d061ab9ba2","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"632689d3-8f7a-401c-8b0f-a746d697a3b4","type":"PanTool"},{"id":"62557722-4a16-43a5-9cf2-181f6b302e66","type":"WheelZoomTool"},{"id":"f3e3b8bb-8d19-4c09-8286-03193412f75c","type":"BoxZoomTool"},{"id":"598855bc-7bfd-451f-9b00-7a1ea3687116","type":"SaveTool"},{"id":"9f19f3ff-1b70-44d9-b8b0-b7b73d1307aa","type":"ResetTool"},{"id":"625d6349-e6fd-48a2-acc4-bcbf2dbdf965","type":"HelpTool"}]},"id":"783fa29a-4669-40eb-9e47-6fe7a6c73482","type":"Toolbar"},{"attributes":{"callback":null},"id":"463ba168-03ab-4fb8-ab06-db3d8734f3a6","type":"DataRange1d"},{"attributes":{"plot":{"id":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e3a8cc4-2924-4e9c-b31b-bc1f4a6e071c","type":"BasicTicker"}},"id":"b290653e-f15f-4191-9906-6523ca7670ef","type":"Grid"},{"attributes":{},"id":"05673716-12d4-4dae-b868-b63387084e46","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"174a13c8-d85a-4ca9-94fe-f015f029071e","type":"Title"},{"attributes":{"data_source":{"id":"a9a6ff96-62cb-417b-b5a8-30ed2f930418","type":"ColumnDataSource"},"glyph":{"id":"76ffdb03-8219-4247-8f64-5e762bfe88fd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c6600e58-03d6-440a-9c3f-dc1fe5080bf7","type":"Circle"},"selection_glyph":null},"id":"2d811567-df65-44e8-b119-cab49b2fd38f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0","subtype":"Figure","type":"Plot"}},"id":"625d6349-e6fd-48a2-acc4-bcbf2dbdf965","type":"HelpTool"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"05673716-12d4-4dae-b868-b63387084e46","type":"BasicTickFormatter"},"plot":{"id":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e3a8cc4-2924-4e9c-b31b-bc1f4a6e071c","type":"BasicTicker"}},"id":"3a83ff8c-21b9-49c6-8618-9002cf20c659","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"a9a6ff96-62cb-417b-b5a8-30ed2f930418","type":"ColumnDataSource"},{"attributes":{},"id":"0796ebd5-11af-46ba-931b-f1dcc248c670","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"76ffdb03-8219-4247-8f64-5e762bfe88fd","type":"Circle"},{"attributes":{},"id":"1e3a8cc4-2924-4e9c-b31b-bc1f4a6e071c","type":"BasicTicker"},{"attributes":{"overlay":{"id":"11b83569-9dcb-42df-b71d-7094757453d1","type":"BoxAnnotation"},"plot":{"id":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0","subtype":"Figure","type":"Plot"}},"id":"f3e3b8bb-8d19-4c09-8286-03193412f75c","type":"BoxZoomTool"},{"attributes":{},"id":"b5e784c4-3d4b-445c-bba6-e2c0752df308","type":"LinearScale"},{"attributes":{"callback":null},"id":"e019b128-3eba-405c-af36-01a813c51447","type":"DataRange1d"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"0eeb9a67-daed-4795-9b67-34d061ab9ba2","type":"BasicTickFormatter"},"plot":{"id":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0","subtype":"Figure","type":"Plot"},"ticker":{"id":"acd5b318-c48f-4c39-9047-a5ec7fc1d93a","type":"BasicTicker"}},"id":"9fb21e2e-1924-4461-b437-6a21dc919414","type":"LinearAxis"},{"attributes":{"plot":{"id":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0","subtype":"Figure","type":"Plot"}},"id":"62557722-4a16-43a5-9cf2-181f6b302e66","type":"WheelZoomTool"}],"root_ids":["4aff41f0-d5b3-448f-a5ab-b92a48bc83f0"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"9fed982f-6237-433d-bc22-cbacb1079df3","elementid":"8d7c26e8-a361-42d0-81dc-dbf10a8f4e4f","modelid":"4aff41f0-d5b3-448f-a5ab-b92a48bc83f0"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
