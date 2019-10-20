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
      };var element = document.getElementById("54030432-6787-4205-9e39-e7815a33df0a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '54030432-6787-4205-9e39-e7815a33df0a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"7d9e378c-eb13-42f5-8aca-0bf9f8938f81":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"42cc17b1-c564-4a0d-b161-8381ac95b2dc","type":"Title"},{"attributes":{"plot":{"id":"7feea6f6-27d1-45c1-b908-25ce60fa4923","subtype":"Figure","type":"Plot"}},"id":"9a4ca60e-4095-44ad-8278-f4356aa3a5dd","type":"WheelZoomTool"},{"attributes":{},"id":"a63b8d15-1f40-4c7e-83c3-ce7a9500cd99","type":"ToolEvents"},{"attributes":{},"id":"8c2451e0-f3d8-440f-ba0c-dc729c44329c","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c54d895d-5043-480b-8dec-55985ef9617c","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"34d5dc44-277a-4c07-878b-0e94a893a989","type":"DataRange1d"},{"attributes":{"below":[{"id":"faf88459-2469-41ac-b218-c3420783ed7d","type":"LinearAxis"}],"left":[{"id":"f649b74c-4af9-407a-8c73-d292c328b002","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"faf88459-2469-41ac-b218-c3420783ed7d","type":"LinearAxis"},{"id":"04b370f4-dc7e-4822-b138-8fd8f88ec1d9","type":"Grid"},{"id":"f649b74c-4af9-407a-8c73-d292c328b002","type":"LinearAxis"},{"id":"a2402be2-9d24-414f-a45b-89b28ede69d2","type":"Grid"},{"id":"c54d895d-5043-480b-8dec-55985ef9617c","type":"BoxAnnotation"},{"id":"87ecaadb-c320-4d13-88f7-6bf6272be16b","type":"GlyphRenderer"}],"title":{"id":"42cc17b1-c564-4a0d-b161-8381ac95b2dc","type":"Title"},"tool_events":{"id":"a63b8d15-1f40-4c7e-83c3-ce7a9500cd99","type":"ToolEvents"},"toolbar":{"id":"c1bda39e-4618-452a-b4e3-a142ca1d41e7","type":"Toolbar"},"x_range":{"id":"8c032076-448b-4e8b-a59f-6e2ceb0f5726","type":"DataRange1d"},"y_range":{"id":"34d5dc44-277a-4c07-878b-0e94a893a989","type":"DataRange1d"}},"id":"7feea6f6-27d1-45c1-b908-25ce60fa4923","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7bcd45a5-b29d-4368-805f-586db84e6819","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y0","x0","x1","y1"],"data":{"x0":[1,2,3],"x1":[1,2,3],"y0":[1,2,3],"y1":[1.2,2.5,3.7]}},"id":"72f4ae4d-42c9-4ec5-870d-0b2fb38b0396","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"7feea6f6-27d1-45c1-b908-25ce60fa4923","subtype":"Figure","type":"Plot"},"ticker":{"id":"c77ccaa5-ff1f-40a7-a1b5-e8799d7608ad","type":"BasicTicker"}},"id":"a2402be2-9d24-414f-a45b-89b28ede69d2","type":"Grid"},{"attributes":{},"id":"13750cdd-b80a-41d0-9e2e-4caa80cfe3c9","type":"BasicTicker"},{"attributes":{"plot":{"id":"7feea6f6-27d1-45c1-b908-25ce60fa4923","subtype":"Figure","type":"Plot"}},"id":"12d4fcaf-bc21-4139-9aea-8328c29aaf5f","type":"ResetTool"},{"attributes":{"formatter":{"id":"8c2451e0-f3d8-440f-ba0c-dc729c44329c","type":"BasicTickFormatter"},"plot":{"id":"7feea6f6-27d1-45c1-b908-25ce60fa4923","subtype":"Figure","type":"Plot"},"ticker":{"id":"13750cdd-b80a-41d0-9e2e-4caa80cfe3c9","type":"BasicTicker"}},"id":"faf88459-2469-41ac-b218-c3420783ed7d","type":"LinearAxis"},{"attributes":{},"id":"c77ccaa5-ff1f-40a7-a1b5-e8799d7608ad","type":"BasicTicker"},{"attributes":{"plot":{"id":"7feea6f6-27d1-45c1-b908-25ce60fa4923","subtype":"Figure","type":"Plot"}},"id":"d422b8c5-5b55-4af7-a1a8-8091dbbd094a","type":"SaveTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"c3064f12-f6d0-41fb-ad66-da2ce0382d8e","type":"Segment"},{"attributes":{"callback":null},"id":"8c032076-448b-4e8b-a59f-6e2ceb0f5726","type":"DataRange1d"},{"attributes":{"plot":{"id":"7feea6f6-27d1-45c1-b908-25ce60fa4923","subtype":"Figure","type":"Plot"}},"id":"bafea556-5e96-4b1f-a69c-a8007ac04938","type":"HelpTool"},{"attributes":{"overlay":{"id":"c54d895d-5043-480b-8dec-55985ef9617c","type":"BoxAnnotation"},"plot":{"id":"7feea6f6-27d1-45c1-b908-25ce60fa4923","subtype":"Figure","type":"Plot"}},"id":"a96cb46c-ff24-437b-9b52-0a28197746a9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7feea6f6-27d1-45c1-b908-25ce60fa4923","subtype":"Figure","type":"Plot"},"ticker":{"id":"13750cdd-b80a-41d0-9e2e-4caa80cfe3c9","type":"BasicTicker"}},"id":"04b370f4-dc7e-4822-b138-8fd8f88ec1d9","type":"Grid"},{"attributes":{"plot":{"id":"7feea6f6-27d1-45c1-b908-25ce60fa4923","subtype":"Figure","type":"Plot"}},"id":"fb18113c-165f-4abf-a754-110997e6c413","type":"PanTool"},{"attributes":{"formatter":{"id":"7bcd45a5-b29d-4368-805f-586db84e6819","type":"BasicTickFormatter"},"plot":{"id":"7feea6f6-27d1-45c1-b908-25ce60fa4923","subtype":"Figure","type":"Plot"},"ticker":{"id":"c77ccaa5-ff1f-40a7-a1b5-e8799d7608ad","type":"BasicTicker"}},"id":"f649b74c-4af9-407a-8c73-d292c328b002","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fb18113c-165f-4abf-a754-110997e6c413","type":"PanTool"},{"id":"9a4ca60e-4095-44ad-8278-f4356aa3a5dd","type":"WheelZoomTool"},{"id":"a96cb46c-ff24-437b-9b52-0a28197746a9","type":"BoxZoomTool"},{"id":"d422b8c5-5b55-4af7-a1a8-8091dbbd094a","type":"SaveTool"},{"id":"12d4fcaf-bc21-4139-9aea-8328c29aaf5f","type":"ResetTool"},{"id":"bafea556-5e96-4b1f-a69c-a8007ac04938","type":"HelpTool"}]},"id":"c1bda39e-4618-452a-b4e3-a142ca1d41e7","type":"Toolbar"},{"attributes":{"data_source":{"id":"72f4ae4d-42c9-4ec5-870d-0b2fb38b0396","type":"ColumnDataSource"},"glyph":{"id":"317742b8-c101-4cd7-8bce-8cdb1229efe8","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"c3064f12-f6d0-41fb-ad66-da2ce0382d8e","type":"Segment"},"selection_glyph":null},"id":"87ecaadb-c320-4d13-88f7-6bf6272be16b","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"#F4A582"},"line_width":{"value":3},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"317742b8-c101-4cd7-8bce-8cdb1229efe8","type":"Segment"}],"root_ids":["7feea6f6-27d1-45c1-b908-25ce60fa4923"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"7d9e378c-eb13-42f5-8aca-0bf9f8938f81","elementid":"54030432-6787-4205-9e39-e7815a33df0a","modelid":"7feea6f6-27d1-45c1-b908-25ce60fa4923"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
