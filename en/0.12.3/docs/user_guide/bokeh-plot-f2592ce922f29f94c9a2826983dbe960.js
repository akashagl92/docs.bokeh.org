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
      };var element = document.getElementById("8e60a337-c20c-42a4-a30f-d5855fb29f17");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8e60a337-c20c-42a4-a30f-d5855fb29f17' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"0349634d-74d3-49af-a6b1-952922239bf6":{"roots":{"references":[{"attributes":{"formatter":{"id":"e7bf855a-4669-44d3-ab62-b8c5b61f8f9b","type":"BasicTickFormatter"},"plot":{"id":"cb708464-df86-4d8d-b73e-0c16e4538336","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d54fbff-a37e-42c0-86dd-7bfe1462277e","type":"BasicTicker"}},"id":"1f413f91-1deb-4a06-a4c3-14e6b67977f5","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"69dd6306-34d7-4cce-a5b0-b30b6ecdc71e","type":"Circle"},{"attributes":{"plot":{"id":"cb708464-df86-4d8d-b73e-0c16e4538336","subtype":"Figure","type":"Plot"}},"id":"12e2cc5f-4afb-4bbb-b286-650a75380741","type":"HelpTool"},{"attributes":{},"id":"d3bcc53f-2e36-489f-923c-549da7ef981f","type":"ToolEvents"},{"attributes":{},"id":"3d54fbff-a37e-42c0-86dd-7bfe1462277e","type":"BasicTicker"},{"attributes":{"plot":{"id":"cb708464-df86-4d8d-b73e-0c16e4538336","subtype":"Figure","type":"Plot"}},"id":"06208339-1db0-4f56-9a32-caa900124c0f","type":"PanTool"},{"attributes":{},"id":"18734a08-3847-4f14-bf0a-602f8013ff20","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"cb8af403-b4d9-440f-8719-8d2afcb6382d","type":"ColumnDataSource"},"glyph":{"id":"ff2f1457-75f7-4615-8853-70cd52c58d23","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"69dd6306-34d7-4cce-a5b0-b30b6ecdc71e","type":"Circle"},"selection_glyph":null},"id":"6343f674-200a-4f62-b710-430f7f4fb9a6","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"cb708464-df86-4d8d-b73e-0c16e4538336","subtype":"Figure","type":"Plot"}},"id":"f46edca3-7b47-40be-ab48-7c70243fa2f3","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"06208339-1db0-4f56-9a32-caa900124c0f","type":"PanTool"},{"id":"18a199b8-ed49-4d9b-9d1f-2e2f7537c230","type":"WheelZoomTool"},{"id":"5684e922-cc59-41a6-9655-c8b2efa8b965","type":"BoxZoomTool"},{"id":"1abbfd51-cb62-4822-8df1-bf85472288ab","type":"SaveTool"},{"id":"f46edca3-7b47-40be-ab48-7c70243fa2f3","type":"ResetTool"},{"id":"12e2cc5f-4afb-4bbb-b286-650a75380741","type":"HelpTool"}]},"id":"5382b437-01cc-4896-839a-66361be3aa7a","type":"Toolbar"},{"attributes":{"plot":null,"text":"Basic Title"},"id":"f48a3b96-cf69-437b-a947-8fee8776fcfd","type":"Title"},{"attributes":{"plot":{"id":"cb708464-df86-4d8d-b73e-0c16e4538336","subtype":"Figure","type":"Plot"}},"id":"1abbfd51-cb62-4822-8df1-bf85472288ab","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"cb8af403-b4d9-440f-8719-8d2afcb6382d","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cb708464-df86-4d8d-b73e-0c16e4538336","subtype":"Figure","type":"Plot"},"ticker":{"id":"282ceffe-8ece-480e-a082-f70e015aab03","type":"BasicTicker"}},"id":"7a1b864d-ef6f-4371-be89-541f64df9676","type":"Grid"},{"attributes":{},"id":"282ceffe-8ece-480e-a082-f70e015aab03","type":"BasicTicker"},{"attributes":{"callback":null},"id":"c0828bde-0d40-461c-9cdd-7afb276a1dd5","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff2f1457-75f7-4615-8853-70cd52c58d23","type":"Circle"},{"attributes":{"overlay":{"id":"50289587-802a-486a-b038-3db3444d60e6","type":"BoxAnnotation"},"plot":{"id":"cb708464-df86-4d8d-b73e-0c16e4538336","subtype":"Figure","type":"Plot"}},"id":"5684e922-cc59-41a6-9655-c8b2efa8b965","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"cb708464-df86-4d8d-b73e-0c16e4538336","subtype":"Figure","type":"Plot"}},"id":"18a199b8-ed49-4d9b-9d1f-2e2f7537c230","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"c059bfae-bf4a-4ab1-a607-a73b044e04da","type":"DataRange1d"},{"attributes":{"formatter":{"id":"18734a08-3847-4f14-bf0a-602f8013ff20","type":"BasicTickFormatter"},"plot":{"id":"cb708464-df86-4d8d-b73e-0c16e4538336","subtype":"Figure","type":"Plot"},"ticker":{"id":"282ceffe-8ece-480e-a082-f70e015aab03","type":"BasicTicker"}},"id":"7cad7e75-5e6c-42a5-9ce9-95957b6e90e1","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"cb708464-df86-4d8d-b73e-0c16e4538336","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d54fbff-a37e-42c0-86dd-7bfe1462277e","type":"BasicTicker"}},"id":"b4f4da8e-10b2-4de9-9300-28abf1cfaf43","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"50289587-802a-486a-b038-3db3444d60e6","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"7cad7e75-5e6c-42a5-9ce9-95957b6e90e1","type":"LinearAxis"}],"left":[{"id":"1f413f91-1deb-4a06-a4c3-14e6b67977f5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7cad7e75-5e6c-42a5-9ce9-95957b6e90e1","type":"LinearAxis"},{"id":"7a1b864d-ef6f-4371-be89-541f64df9676","type":"Grid"},{"id":"1f413f91-1deb-4a06-a4c3-14e6b67977f5","type":"LinearAxis"},{"id":"b4f4da8e-10b2-4de9-9300-28abf1cfaf43","type":"Grid"},{"id":"50289587-802a-486a-b038-3db3444d60e6","type":"BoxAnnotation"},{"id":"6343f674-200a-4f62-b710-430f7f4fb9a6","type":"GlyphRenderer"}],"title":{"id":"f48a3b96-cf69-437b-a947-8fee8776fcfd","type":"Title"},"tool_events":{"id":"d3bcc53f-2e36-489f-923c-549da7ef981f","type":"ToolEvents"},"toolbar":{"id":"5382b437-01cc-4896-839a-66361be3aa7a","type":"Toolbar"},"x_range":{"id":"c059bfae-bf4a-4ab1-a607-a73b044e04da","type":"DataRange1d"},"y_range":{"id":"c0828bde-0d40-461c-9cdd-7afb276a1dd5","type":"DataRange1d"}},"id":"cb708464-df86-4d8d-b73e-0c16e4538336","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"e7bf855a-4669-44d3-ab62-b8c5b61f8f9b","type":"BasicTickFormatter"}],"root_ids":["cb708464-df86-4d8d-b73e-0c16e4538336"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"0349634d-74d3-49af-a6b1-952922239bf6","elementid":"8e60a337-c20c-42a4-a30f-d5855fb29f17","modelid":"cb708464-df86-4d8d-b73e-0c16e4538336"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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