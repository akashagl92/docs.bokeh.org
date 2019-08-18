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
      };var element = document.getElementById("bad34654-e573-4878-8b7b-c0371a95829e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bad34654-e573-4878-8b7b-c0371a95829e' but no matching script tag was found. ")
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
                var docs_json = {"06a0107d-b432-4712-bde5-acb06fb5bb41":{"roots":{"references":[{"attributes":{"formatter":{"id":"2aa1b5c4-0346-40c6-80c7-5fd7efd21dcb","type":"BasicTickFormatter"},"plot":{"id":"cba3372a-8b42-4baf-a6f8-63a21638bc3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"df44a6c5-108a-4f7a-a6df-a1cca1450985","type":"BasicTicker"}},"id":"ff3a647c-53f3-422a-aeb6-9438550875dd","type":"LinearAxis"},{"attributes":{},"id":"df44a6c5-108a-4f7a-a6df-a1cca1450985","type":"BasicTicker"},{"attributes":{"plot":{"id":"cba3372a-8b42-4baf-a6f8-63a21638bc3a","subtype":"Figure","type":"Plot"}},"id":"2463b3d7-5361-45da-8507-d5816dc0628d","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"484f3ad7-f9af-479e-a10e-5617b77cbe0b","type":"ColumnDataSource"},"glyph":{"id":"3d4b340f-d7a5-4782-9bc1-48eec9284096","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a9b2df39-2e51-4c54-be5c-92f1d4a3d451","type":"Patch"},"selection_glyph":null},"id":"7c4d8b52-3b3d-4cf6-a47b-28ec642760e2","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"55b6c5a3-0162-44a8-a3fa-e9c00b401b1a","type":"BoxAnnotation"},"plot":{"id":"cba3372a-8b42-4baf-a6f8-63a21638bc3a","subtype":"Figure","type":"Plot"}},"id":"b9ccefcf-fb5c-42e6-be15-ab1a0c1b4b5e","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"6703638a-5da5-4928-b1d1-ecfc0fd16553","type":"Title"},{"attributes":{"formatter":{"id":"bec61d21-df9f-4edc-b714-1c43590e7515","type":"BasicTickFormatter"},"plot":{"id":"cba3372a-8b42-4baf-a6f8-63a21638bc3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"cba65136-6769-494f-9121-afa97b66d9e2","type":"BasicTicker"}},"id":"b2afa508-1c4e-46e5-8696-fc8c74f010e9","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"55b6c5a3-0162-44a8-a3fa-e9c00b401b1a","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"7348568b-12c7-458a-b2d9-6602457102bc","type":"DataRange1d"},{"attributes":{"callback":null},"id":"82b5c817-ebe5-474f-a68a-f046970371f3","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"cba3372a-8b42-4baf-a6f8-63a21638bc3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"df44a6c5-108a-4f7a-a6df-a1cca1450985","type":"BasicTicker"}},"id":"d0697530-14a6-4b44-97ac-331be5bc517a","type":"Grid"},{"attributes":{},"id":"cba65136-6769-494f-9121-afa97b66d9e2","type":"BasicTicker"},{"attributes":{"plot":{"id":"cba3372a-8b42-4baf-a6f8-63a21638bc3a","subtype":"Figure","type":"Plot"}},"id":"58997935-0a05-457f-b24b-8e8e9fa51eca","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"58997935-0a05-457f-b24b-8e8e9fa51eca","type":"PanTool"},{"id":"2463b3d7-5361-45da-8507-d5816dc0628d","type":"WheelZoomTool"},{"id":"b9ccefcf-fb5c-42e6-be15-ab1a0c1b4b5e","type":"BoxZoomTool"},{"id":"e36f62cb-a614-418f-892a-6c7e7c5c2b1d","type":"SaveTool"},{"id":"c928040d-55f5-436d-8a8a-7990622f5186","type":"ResetTool"},{"id":"959dc089-897e-4252-847a-6a0403fa0340","type":"HelpTool"}]},"id":"e0145ffb-f9d3-4831-ae4a-89c50ad97729","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,2],"y":[6,7,2,2]}},"id":"484f3ad7-f9af-479e-a10e-5617b77cbe0b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cba3372a-8b42-4baf-a6f8-63a21638bc3a","subtype":"Figure","type":"Plot"}},"id":"c928040d-55f5-436d-8a8a-7990622f5186","type":"ResetTool"},{"attributes":{},"id":"bec61d21-df9f-4edc-b714-1c43590e7515","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"cba3372a-8b42-4baf-a6f8-63a21638bc3a","subtype":"Figure","type":"Plot"},"ticker":{"id":"cba65136-6769-494f-9121-afa97b66d9e2","type":"BasicTicker"}},"id":"b599e499-a636-4161-b31c-c7899abc47ef","type":"Grid"},{"attributes":{"plot":{"id":"cba3372a-8b42-4baf-a6f8-63a21638bc3a","subtype":"Figure","type":"Plot"}},"id":"e36f62cb-a614-418f-892a-6c7e7c5c2b1d","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#99d8c9"},"line_color":{"value":"#99d8c9"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d4b340f-d7a5-4782-9bc1-48eec9284096","type":"Patch"},{"attributes":{},"id":"2aa1b5c4-0346-40c6-80c7-5fd7efd21dcb","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9b2df39-2e51-4c54-be5c-92f1d4a3d451","type":"Patch"},{"attributes":{"plot":{"id":"cba3372a-8b42-4baf-a6f8-63a21638bc3a","subtype":"Figure","type":"Plot"}},"id":"959dc089-897e-4252-847a-6a0403fa0340","type":"HelpTool"},{"attributes":{"below":[{"id":"b2afa508-1c4e-46e5-8696-fc8c74f010e9","type":"LinearAxis"}],"left":[{"id":"ff3a647c-53f3-422a-aeb6-9438550875dd","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b2afa508-1c4e-46e5-8696-fc8c74f010e9","type":"LinearAxis"},{"id":"b599e499-a636-4161-b31c-c7899abc47ef","type":"Grid"},{"id":"ff3a647c-53f3-422a-aeb6-9438550875dd","type":"LinearAxis"},{"id":"d0697530-14a6-4b44-97ac-331be5bc517a","type":"Grid"},{"id":"55b6c5a3-0162-44a8-a3fa-e9c00b401b1a","type":"BoxAnnotation"},{"id":"7c4d8b52-3b3d-4cf6-a47b-28ec642760e2","type":"GlyphRenderer"}],"title":{"id":"6703638a-5da5-4928-b1d1-ecfc0fd16553","type":"Title"},"tool_events":{"id":"ac6b5cf5-30a5-4cd2-ac85-c7ce4d4477f8","type":"ToolEvents"},"toolbar":{"id":"e0145ffb-f9d3-4831-ae4a-89c50ad97729","type":"Toolbar"},"x_range":{"id":"82b5c817-ebe5-474f-a68a-f046970371f3","type":"DataRange1d"},"x_scale":{"id":"3ae2e71e-c2c1-4fdf-a546-a0a4c8778cd6","type":"LinearScale"},"y_range":{"id":"7348568b-12c7-458a-b2d9-6602457102bc","type":"DataRange1d"},"y_scale":{"id":"99c9d20d-6a17-4f70-96d0-a52b7a0fd53f","type":"LinearScale"}},"id":"cba3372a-8b42-4baf-a6f8-63a21638bc3a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3ae2e71e-c2c1-4fdf-a546-a0a4c8778cd6","type":"LinearScale"},{"attributes":{},"id":"99c9d20d-6a17-4f70-96d0-a52b7a0fd53f","type":"LinearScale"},{"attributes":{},"id":"ac6b5cf5-30a5-4cd2-ac85-c7ce4d4477f8","type":"ToolEvents"}],"root_ids":["cba3372a-8b42-4baf-a6f8-63a21638bc3a"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"06a0107d-b432-4712-bde5-acb06fb5bb41","elementid":"bad34654-e573-4878-8b7b-c0371a95829e","modelid":"cba3372a-8b42-4baf-a6f8-63a21638bc3a"}];
                
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
