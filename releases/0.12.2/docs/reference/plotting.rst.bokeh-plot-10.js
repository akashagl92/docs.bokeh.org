document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("19da1665-eb61-40fd-84c8-7d702700c765");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '19da1665-eb61-40fd-84c8-7d702700c765' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"7ccbe861-93ba-4b83-88bd-f99ccdbb3d99":{"roots":{"references":[{"attributes":{"data_source":{"id":"ab3609e2-310b-4962-a297-14b877f2a141","type":"ColumnDataSource"},"glyph":{"id":"57efb3fc-fc54-4862-8a5e-ba13e14c734d","type":"InvertedTriangle"},"hover_glyph":null,"nonselection_glyph":{"id":"a9a9bb99-136b-457e-b3ac-4dbc85731e1e","type":"InvertedTriangle"},"selection_glyph":null},"id":"7b483861-82ee-4c8e-af3b-b6f21fbaf3f3","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"91385d81-0065-45df-83a3-4b76571914f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8754a6b-2282-4e5d-a69d-791c7ce6e69b","type":"BasicTicker"}},"id":"eb4a037e-314a-4e8c-b978-ceb3936daa10","type":"Grid"},{"attributes":{"formatter":{"id":"95377010-0257-42d3-aace-3ba7702a4cdf","type":"BasicTickFormatter"},"plot":{"id":"91385d81-0065-45df-83a3-4b76571914f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8754a6b-2282-4e5d-a69d-791c7ce6e69b","type":"BasicTicker"}},"id":"5371717f-4235-4059-a886-ce03d622af52","type":"LinearAxis"},{"attributes":{"formatter":{"id":"e64b1034-ffad-4919-9161-208c1b9fd997","type":"BasicTickFormatter"},"plot":{"id":"91385d81-0065-45df-83a3-4b76571914f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4ad3db6-d3cc-4a9f-bd91-8d247cca43ba","type":"BasicTicker"}},"id":"dce10eba-b984-4ae6-aebd-bc56170cf15c","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"57efb3fc-fc54-4862-8a5e-ba13e14c734d","type":"InvertedTriangle"},{"attributes":{},"id":"95377010-0257-42d3-aace-3ba7702a4cdf","type":"BasicTickFormatter"},{"attributes":{},"id":"e64b1034-ffad-4919-9161-208c1b9fd997","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"91385d81-0065-45df-83a3-4b76571914f1","subtype":"Figure","type":"Plot"}},"id":"70fa48e0-2242-48ea-972f-21464d2ac425","type":"HelpTool"},{"attributes":{"callback":null},"id":"f681ee3b-c62d-4de8-824e-9fa6f8be1fcd","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9a9bb99-136b-457e-b3ac-4dbc85731e1e","type":"InvertedTriangle"},{"attributes":{"plot":{"id":"91385d81-0065-45df-83a3-4b76571914f1","subtype":"Figure","type":"Plot"}},"id":"e131232f-bc7b-4872-92a7-517a0c70f1ab","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ba0a33c4-3346-483a-952e-968456b8737c","type":"PanTool"},{"id":"e131232f-bc7b-4872-92a7-517a0c70f1ab","type":"WheelZoomTool"},{"id":"f85cde88-efc3-4648-893e-c8247dc16fed","type":"BoxZoomTool"},{"id":"12aeb516-9058-442a-bf50-75e07ddb8147","type":"SaveTool"},{"id":"35f23754-d98d-4092-8002-6436e3dc1904","type":"ResetTool"},{"id":"70fa48e0-2242-48ea-972f-21464d2ac425","type":"HelpTool"}]},"id":"93a968a0-786a-4ce1-ab14-fad65a6f0519","type":"Toolbar"},{"attributes":{},"id":"c26c9de0-1944-46c5-8d06-c1bc43e519de","type":"ToolEvents"},{"attributes":{"below":[{"id":"dce10eba-b984-4ae6-aebd-bc56170cf15c","type":"LinearAxis"}],"left":[{"id":"5371717f-4235-4059-a886-ce03d622af52","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"dce10eba-b984-4ae6-aebd-bc56170cf15c","type":"LinearAxis"},{"id":"3ccb4e8f-6df6-4191-bf80-ef7967c4a150","type":"Grid"},{"id":"5371717f-4235-4059-a886-ce03d622af52","type":"LinearAxis"},{"id":"eb4a037e-314a-4e8c-b978-ceb3936daa10","type":"Grid"},{"id":"6aa4ded6-b42e-424f-99da-1fb9c9d28022","type":"BoxAnnotation"},{"id":"7b483861-82ee-4c8e-af3b-b6f21fbaf3f3","type":"GlyphRenderer"}],"title":{"id":"5db08981-fa1d-430c-a024-0c6182ad3348","type":"Title"},"tool_events":{"id":"c26c9de0-1944-46c5-8d06-c1bc43e519de","type":"ToolEvents"},"toolbar":{"id":"93a968a0-786a-4ce1-ab14-fad65a6f0519","type":"Toolbar"},"x_range":{"id":"f681ee3b-c62d-4de8-824e-9fa6f8be1fcd","type":"DataRange1d"},"y_range":{"id":"f1edad61-9553-4188-b567-998d9e236b8e","type":"DataRange1d"}},"id":"91385d81-0065-45df-83a3-4b76571914f1","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"ab3609e2-310b-4962-a297-14b877f2a141","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6aa4ded6-b42e-424f-99da-1fb9c9d28022","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"91385d81-0065-45df-83a3-4b76571914f1","subtype":"Figure","type":"Plot"}},"id":"ba0a33c4-3346-483a-952e-968456b8737c","type":"PanTool"},{"attributes":{"plot":{"id":"91385d81-0065-45df-83a3-4b76571914f1","subtype":"Figure","type":"Plot"}},"id":"35f23754-d98d-4092-8002-6436e3dc1904","type":"ResetTool"},{"attributes":{},"id":"e4ad3db6-d3cc-4a9f-bd91-8d247cca43ba","type":"BasicTicker"},{"attributes":{"plot":{"id":"91385d81-0065-45df-83a3-4b76571914f1","subtype":"Figure","type":"Plot"}},"id":"12aeb516-9058-442a-bf50-75e07ddb8147","type":"SaveTool"},{"attributes":{},"id":"a8754a6b-2282-4e5d-a69d-791c7ce6e69b","type":"BasicTicker"},{"attributes":{"plot":{"id":"91385d81-0065-45df-83a3-4b76571914f1","subtype":"Figure","type":"Plot"},"ticker":{"id":"e4ad3db6-d3cc-4a9f-bd91-8d247cca43ba","type":"BasicTicker"}},"id":"3ccb4e8f-6df6-4191-bf80-ef7967c4a150","type":"Grid"},{"attributes":{"callback":null},"id":"f1edad61-9553-4188-b567-998d9e236b8e","type":"DataRange1d"},{"attributes":{"plot":null,"text":null},"id":"5db08981-fa1d-430c-a024-0c6182ad3348","type":"Title"},{"attributes":{"overlay":{"id":"6aa4ded6-b42e-424f-99da-1fb9c9d28022","type":"BoxAnnotation"},"plot":{"id":"91385d81-0065-45df-83a3-4b76571914f1","subtype":"Figure","type":"Plot"}},"id":"f85cde88-efc3-4648-893e-c8247dc16fed","type":"BoxZoomTool"}],"root_ids":["91385d81-0065-45df-83a3-4b76571914f1"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"7ccbe861-93ba-4b83-88bd-f99ccdbb3d99","elementid":"19da1665-eb61-40fd-84c8-7d702700c765","modelid":"91385d81-0065-45df-83a3-4b76571914f1"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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