document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
      }
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("d8d59996-a5ee-4dbe-8b30-2583ab0f2391");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd8d59996-a5ee-4dbe-8b30-2583ab0f2391' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6460a959-bcfd-4293-ba26-d288eee7e343":{"roots":{"references":[{"attributes":{},"id":"c3ad5fd9-87f6-40d2-934b-0655ab044f95","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"0a48215d-d0f2-44e3-b202-94c17dcc0bbe","type":"BoxAnnotation"},"plot":{"id":"4ad730bb-89e1-4157-b051-8ec07f9d3bab","subtype":"Figure","type":"Plot"}},"id":"05ca1774-9177-4e50-96c9-be9fbd854d98","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"e022da6c-03fa-4f4c-8d3f-46e44364d849","type":"DataRange1d"},{"attributes":{"plot":{"id":"4ad730bb-89e1-4157-b051-8ec07f9d3bab","subtype":"Figure","type":"Plot"}},"id":"eadbd710-70fc-4a3d-b5d4-ca3d551fec60","type":"WheelZoomTool"},{"attributes":{},"id":"e1319de7-05f9-4041-87cd-9e7f05c9453c","type":"BasicTicker"},{"attributes":{"plot":{"id":"4ad730bb-89e1-4157-b051-8ec07f9d3bab","subtype":"Figure","type":"Plot"}},"id":"dbfb2e8a-3557-420c-8b09-f668d52d3af7","type":"SaveTool"},{"attributes":{},"id":"28a67012-8d6b-4987-b2da-ecc282470fb3","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"0a48215d-d0f2-44e3-b202-94c17dcc0bbe","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"c7a3e0d0-759d-40ff-bb48-d4dfdcb83da6","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4b16ce75-ff70-4015-9e84-c466a9f2fb5d","type":"PanTool"},{"id":"eadbd710-70fc-4a3d-b5d4-ca3d551fec60","type":"WheelZoomTool"},{"id":"05ca1774-9177-4e50-96c9-be9fbd854d98","type":"BoxZoomTool"},{"id":"dbfb2e8a-3557-420c-8b09-f668d52d3af7","type":"SaveTool"},{"id":"16ec328f-3025-456e-a9c4-e4f5f5f1b51c","type":"ResetTool"},{"id":"1556ef4b-e037-4c0e-b55b-b1eff8379141","type":"HelpTool"}]},"id":"fe3a8234-f0d8-4dba-9f4d-85fbda49e248","type":"Toolbar"},{"attributes":{},"id":"76ff6373-b798-4235-8cd6-4c9fa4aa2f71","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"a06b8058-a720-4120-8afb-9bfe64ae944b","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#F0027F"},"line_color":{"value":"#F0027F"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"07cf5614-ca12-4eea-b817-ddb7a2b9d897","type":"Asterisk"},{"attributes":{"plot":{"id":"4ad730bb-89e1-4157-b051-8ec07f9d3bab","subtype":"Figure","type":"Plot"}},"id":"4b16ce75-ff70-4015-9e84-c466a9f2fb5d","type":"PanTool"},{"attributes":{"plot":{"id":"4ad730bb-89e1-4157-b051-8ec07f9d3bab","subtype":"Figure","type":"Plot"}},"id":"1556ef4b-e037-4c0e-b55b-b1eff8379141","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"4ad730bb-89e1-4157-b051-8ec07f9d3bab","subtype":"Figure","type":"Plot"},"ticker":{"id":"28a67012-8d6b-4987-b2da-ecc282470fb3","type":"BasicTicker"}},"id":"a78af2f3-b764-4660-a470-e1a9ecd77ade","type":"Grid"},{"attributes":{"plot":{"id":"4ad730bb-89e1-4157-b051-8ec07f9d3bab","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1319de7-05f9-4041-87cd-9e7f05c9453c","type":"BasicTicker"}},"id":"c81f7723-4878-4315-8f7d-42c907cfb4c7","type":"Grid"},{"attributes":{"below":[{"id":"c50ba254-aba5-4728-870b-c713f8799656","type":"LinearAxis"}],"left":[{"id":"44ef1c93-d4c4-4b68-a5d7-942d6cdbe335","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"c50ba254-aba5-4728-870b-c713f8799656","type":"LinearAxis"},{"id":"c81f7723-4878-4315-8f7d-42c907cfb4c7","type":"Grid"},{"id":"44ef1c93-d4c4-4b68-a5d7-942d6cdbe335","type":"LinearAxis"},{"id":"a78af2f3-b764-4660-a470-e1a9ecd77ade","type":"Grid"},{"id":"0a48215d-d0f2-44e3-b202-94c17dcc0bbe","type":"BoxAnnotation"},{"id":"359f9d10-f164-4a82-b27d-de4eb0c5a481","type":"GlyphRenderer"}],"title":{"id":"b9cb0a55-e217-4e58-b842-2ad16b295520","type":"Title"},"tool_events":{"id":"d8879ce4-2433-4b92-953d-6e5204d45d6f","type":"ToolEvents"},"toolbar":{"id":"fe3a8234-f0d8-4dba-9f4d-85fbda49e248","type":"Toolbar"},"x_range":{"id":"a06b8058-a720-4120-8afb-9bfe64ae944b","type":"DataRange1d"},"y_range":{"id":"e022da6c-03fa-4f4c-8d3f-46e44364d849","type":"DataRange1d"}},"id":"4ad730bb-89e1-4157-b051-8ec07f9d3bab","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"c7a3e0d0-759d-40ff-bb48-d4dfdcb83da6","type":"ColumnDataSource"},"glyph":{"id":"07cf5614-ca12-4eea-b817-ddb7a2b9d897","type":"Asterisk"},"hover_glyph":null,"nonselection_glyph":{"id":"9fb1e79c-1f0b-4b45-abf3-472e90260dd0","type":"Asterisk"},"selection_glyph":null},"id":"359f9d10-f164-4a82-b27d-de4eb0c5a481","type":"GlyphRenderer"},{"attributes":{},"id":"d8879ce4-2433-4b92-953d-6e5204d45d6f","type":"ToolEvents"},{"attributes":{"formatter":{"id":"76ff6373-b798-4235-8cd6-4c9fa4aa2f71","type":"BasicTickFormatter"},"plot":{"id":"4ad730bb-89e1-4157-b051-8ec07f9d3bab","subtype":"Figure","type":"Plot"},"ticker":{"id":"28a67012-8d6b-4987-b2da-ecc282470fb3","type":"BasicTicker"}},"id":"44ef1c93-d4c4-4b68-a5d7-942d6cdbe335","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"b9cb0a55-e217-4e58-b842-2ad16b295520","type":"Title"},{"attributes":{"formatter":{"id":"c3ad5fd9-87f6-40d2-934b-0655ab044f95","type":"BasicTickFormatter"},"plot":{"id":"4ad730bb-89e1-4157-b051-8ec07f9d3bab","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1319de7-05f9-4041-87cd-9e7f05c9453c","type":"BasicTicker"}},"id":"c50ba254-aba5-4728-870b-c713f8799656","type":"LinearAxis"},{"attributes":{"plot":{"id":"4ad730bb-89e1-4157-b051-8ec07f9d3bab","subtype":"Figure","type":"Plot"}},"id":"16ec328f-3025-456e-a9c4-e4f5f5f1b51c","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"9fb1e79c-1f0b-4b45-abf3-472e90260dd0","type":"Asterisk"}],"root_ids":["4ad730bb-89e1-4157-b051-8ec07f9d3bab"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"6460a959-bcfd-4293-ba26-d288eee7e343","elementid":"d8d59996-a5ee-4dbe-8b30-2583ab0f2391","modelid":"4ad730bb-89e1-4157-b051-8ec07f9d3bab"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});