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
      };var element = document.getElementById("90d5ca36-8f1a-4c8e-9b6b-518274e863d1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '90d5ca36-8f1a-4c8e-9b6b-518274e863d1' but no matching script tag was found. ")
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
                var docs_json = {"a809b39e-b0b2-4f9e-9fe8-0ed055fdd261":{"roots":{"references":[{"attributes":{"formatter":{"id":"6dce4904-fdd2-4e9c-b1ba-2efa1a815807","type":"BasicTickFormatter"},"plot":{"id":"2350e7cf-08a5-44a4-a480-e119362f31f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d4a8a25-3814-43c8-b97d-0aad9b1991d2","type":"BasicTicker"}},"id":"5b97f8c7-575b-4c9a-b340-9cf759dd8a4c","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d9996453-a690-4d14-ae24-c624d853bdfb","type":"Oval"},{"attributes":{"plot":{"id":"2350e7cf-08a5-44a4-a480-e119362f31f3","subtype":"Figure","type":"Plot"}},"id":"b0a5e540-cac2-44fb-8769-ae895d0d9a06","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"2350e7cf-08a5-44a4-a480-e119362f31f3","subtype":"Figure","type":"Plot"}},"id":"3484b6e4-2dc9-489e-85e3-ff57a07a945d","type":"SaveTool"},{"attributes":{"formatter":{"id":"95e041ed-5c08-4ba3-86bd-4d741630bf79","type":"BasicTickFormatter"},"plot":{"id":"2350e7cf-08a5-44a4-a480-e119362f31f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"b36196e4-0dd3-4d27-b7ad-df605a68901f","type":"BasicTicker"}},"id":"beaf5ca2-53ef-4345-8757-318f6dd24605","type":"LinearAxis"},{"attributes":{},"id":"a94bacca-a879-4e1c-8edc-ecdcd3b4af2f","type":"LinearScale"},{"attributes":{"callback":null},"id":"3d8fc750-c240-4568-8b8b-9e12b8323ffb","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"835c5dc5-b898-454d-a114-48c569821c79","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"2350e7cf-08a5-44a4-a480-e119362f31f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"4d4a8a25-3814-43c8-b97d-0aad9b1991d2","type":"BasicTicker"}},"id":"ca04a2c1-f7d5-4686-ac03-076e947f14f1","type":"Grid"},{"attributes":{"below":[{"id":"beaf5ca2-53ef-4345-8757-318f6dd24605","type":"LinearAxis"}],"left":[{"id":"5b97f8c7-575b-4c9a-b340-9cf759dd8a4c","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"beaf5ca2-53ef-4345-8757-318f6dd24605","type":"LinearAxis"},{"id":"9da20c1b-e349-45b8-82b1-475c73795838","type":"Grid"},{"id":"5b97f8c7-575b-4c9a-b340-9cf759dd8a4c","type":"LinearAxis"},{"id":"ca04a2c1-f7d5-4686-ac03-076e947f14f1","type":"Grid"},{"id":"e0d6f693-17c5-4d0b-8c85-0a5e6bac3912","type":"BoxAnnotation"},{"id":"edc1ad3f-2f6a-4116-b7a8-9b287854c222","type":"GlyphRenderer"}],"title":{"id":"f68e4cf6-36f7-4c60-8fb6-55f0d98021f1","type":"Title"},"tool_events":{"id":"a3d10d0b-96be-4dce-8192-671f3f3ab798","type":"ToolEvents"},"toolbar":{"id":"ce55b990-00c9-4985-8492-403d2ca6079b","type":"Toolbar"},"x_range":{"id":"3d8fc750-c240-4568-8b8b-9e12b8323ffb","type":"DataRange1d"},"x_scale":{"id":"f280b09c-e964-4a95-b3c7-514c328cebdc","type":"LinearScale"},"y_range":{"id":"898e8292-2380-4cf1-8b10-606814f95897","type":"DataRange1d"},"y_scale":{"id":"a94bacca-a879-4e1c-8edc-ecdcd3b4af2f","type":"LinearScale"}},"id":"2350e7cf-08a5-44a4-a480-e119362f31f3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f280b09c-e964-4a95-b3c7-514c328cebdc","type":"LinearScale"},{"attributes":{"data_source":{"id":"835c5dc5-b898-454d-a114-48c569821c79","type":"ColumnDataSource"},"glyph":{"id":"7b032e10-61ee-440b-aac2-00366aaed733","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d9996453-a690-4d14-ae24-c624d853bdfb","type":"Oval"},"selection_glyph":null},"id":"edc1ad3f-2f6a-4116-b7a8-9b287854c222","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"2350e7cf-08a5-44a4-a480-e119362f31f3","subtype":"Figure","type":"Plot"},"ticker":{"id":"b36196e4-0dd3-4d27-b7ad-df605a68901f","type":"BasicTicker"}},"id":"9da20c1b-e349-45b8-82b1-475c73795838","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e0d6f693-17c5-4d0b-8c85-0a5e6bac3912","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"f68e4cf6-36f7-4c60-8fb6-55f0d98021f1","type":"Title"},{"attributes":{},"id":"6dce4904-fdd2-4e9c-b1ba-2efa1a815807","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b032e10-61ee-440b-aac2-00366aaed733","type":"Oval"},{"attributes":{"plot":{"id":"2350e7cf-08a5-44a4-a480-e119362f31f3","subtype":"Figure","type":"Plot"}},"id":"ace6a8bd-0ac4-4073-a011-070818eb74dc","type":"ResetTool"},{"attributes":{},"id":"b36196e4-0dd3-4d27-b7ad-df605a68901f","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fc6dbbdd-d525-46c0-8f54-5140ea9365a6","type":"PanTool"},{"id":"b0a5e540-cac2-44fb-8769-ae895d0d9a06","type":"WheelZoomTool"},{"id":"62657731-7fac-4868-bfed-a67214a2c03a","type":"BoxZoomTool"},{"id":"3484b6e4-2dc9-489e-85e3-ff57a07a945d","type":"SaveTool"},{"id":"ace6a8bd-0ac4-4073-a011-070818eb74dc","type":"ResetTool"},{"id":"c3109c27-730b-4a28-89d3-cc9760b81d83","type":"HelpTool"}]},"id":"ce55b990-00c9-4985-8492-403d2ca6079b","type":"Toolbar"},{"attributes":{},"id":"4d4a8a25-3814-43c8-b97d-0aad9b1991d2","type":"BasicTicker"},{"attributes":{"overlay":{"id":"e0d6f693-17c5-4d0b-8c85-0a5e6bac3912","type":"BoxAnnotation"},"plot":{"id":"2350e7cf-08a5-44a4-a480-e119362f31f3","subtype":"Figure","type":"Plot"}},"id":"62657731-7fac-4868-bfed-a67214a2c03a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"2350e7cf-08a5-44a4-a480-e119362f31f3","subtype":"Figure","type":"Plot"}},"id":"c3109c27-730b-4a28-89d3-cc9760b81d83","type":"HelpTool"},{"attributes":{"plot":{"id":"2350e7cf-08a5-44a4-a480-e119362f31f3","subtype":"Figure","type":"Plot"}},"id":"fc6dbbdd-d525-46c0-8f54-5140ea9365a6","type":"PanTool"},{"attributes":{},"id":"95e041ed-5c08-4ba3-86bd-4d741630bf79","type":"BasicTickFormatter"},{"attributes":{},"id":"a3d10d0b-96be-4dce-8192-671f3f3ab798","type":"ToolEvents"},{"attributes":{"callback":null},"id":"898e8292-2380-4cf1-8b10-606814f95897","type":"DataRange1d"}],"root_ids":["2350e7cf-08a5-44a4-a480-e119362f31f3"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"a809b39e-b0b2-4f9e-9fe8-0ed055fdd261","elementid":"90d5ca36-8f1a-4c8e-9b6b-518274e863d1","modelid":"2350e7cf-08a5-44a4-a480-e119362f31f3"}];
                
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
