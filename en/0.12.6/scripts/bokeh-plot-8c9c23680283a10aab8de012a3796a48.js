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
      };var element = document.getElementById("70520e06-cace-4db5-84ed-070f679e96a5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '70520e06-cace-4db5-84ed-070f679e96a5' but no matching script tag was found. ")
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
                var docs_json = {"b282685b-c4a1-4ec8-bed7-b24bef39e876":{"roots":{"references":[{"attributes":{"plot":{"id":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1","subtype":"Figure","type":"Plot"}},"id":"a3b4363d-26f6-4717-8528-21e9e610467f","type":"ResetTool"},{"attributes":{"callback":null},"id":"0126f9f8-192f-49f4-8321-886fb9898031","type":"DataRange1d"},{"attributes":{"plot":{"id":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1","subtype":"Figure","type":"Plot"}},"id":"4e637aa7-69b1-4839-905a-0fb0c90ce073","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f655530c-57f1-4767-9232-08102b75a786","type":"PanTool"},{"id":"9002ec7c-a7b5-4bb6-8561-fb1ae8f48c6a","type":"WheelZoomTool"},{"id":"f2793393-63ee-419e-b0e1-348e0b6fbdfb","type":"BoxZoomTool"},{"id":"4e637aa7-69b1-4839-905a-0fb0c90ce073","type":"SaveTool"},{"id":"a3b4363d-26f6-4717-8528-21e9e610467f","type":"ResetTool"},{"id":"3d0f6822-84f2-45fb-a5cf-d6bb7be9b4a7","type":"HelpTool"}]},"id":"7cc9a684-3e62-455d-80bc-6db8bda734fa","type":"Toolbar"},{"attributes":{"plot":{"id":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1","subtype":"Figure","type":"Plot"}},"id":"f655530c-57f1-4767-9232-08102b75a786","type":"PanTool"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"2b3d120b-b177-4996-8b01-b31760e97b29","type":"VBar"},{"attributes":{"data_source":{"id":"04674478-fad3-41b6-8707-1e34660d858d","type":"ColumnDataSource"},"glyph":{"id":"2b3d120b-b177-4996-8b01-b31760e97b29","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ad1dd0ef-a155-47c8-9f14-1fb880a30abf","type":"VBar"},"selection_glyph":null},"id":"46b8baf3-f72f-4ce2-90dc-2ec0bee5f898","type":"GlyphRenderer"},{"attributes":{},"id":"18b9ff6b-ed4e-4b3c-9f2a-653b27b36f80","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"0c019549-972f-48fe-b2df-ca9cf1a8876a","type":"Title"},{"attributes":{},"id":"aaac9565-ee42-4bc1-83d1-9d1264e781b6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1","subtype":"Figure","type":"Plot"}},"id":"9002ec7c-a7b5-4bb6-8561-fb1ae8f48c6a","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1","subtype":"Figure","type":"Plot"}},"id":"3d0f6822-84f2-45fb-a5cf-d6bb7be9b4a7","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"ad1dd0ef-a155-47c8-9f14-1fb880a30abf","type":"VBar"},{"attributes":{"callback":null},"id":"cb00ccbb-5ec5-4a52-9b1f-e157e879da07","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[1.2,2.5,3.7],"x":[1,2,3]}},"id":"04674478-fad3-41b6-8707-1e34660d858d","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"e17efca0-c73c-4a2d-accd-467648ac932a","type":"LinearAxis"}],"left":[{"id":"7f65766d-cb54-4ea0-8269-169dd44235dd","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e17efca0-c73c-4a2d-accd-467648ac932a","type":"LinearAxis"},{"id":"e085b033-6044-4d42-aae4-15e38796a66f","type":"Grid"},{"id":"7f65766d-cb54-4ea0-8269-169dd44235dd","type":"LinearAxis"},{"id":"9bf35955-fb8f-4cf9-ae8c-715dff15c84f","type":"Grid"},{"id":"056c587f-73f6-4fa7-b07c-64465726cda7","type":"BoxAnnotation"},{"id":"46b8baf3-f72f-4ce2-90dc-2ec0bee5f898","type":"GlyphRenderer"}],"title":{"id":"0c019549-972f-48fe-b2df-ca9cf1a8876a","type":"Title"},"tool_events":{"id":"d04b4408-71d7-4107-8d94-9d691b0e3701","type":"ToolEvents"},"toolbar":{"id":"7cc9a684-3e62-455d-80bc-6db8bda734fa","type":"Toolbar"},"x_range":{"id":"cb00ccbb-5ec5-4a52-9b1f-e157e879da07","type":"DataRange1d"},"x_scale":{"id":"045a415a-fd32-42ba-a6b0-b3018e6f53c2","type":"LinearScale"},"y_range":{"id":"0126f9f8-192f-49f4-8321-886fb9898031","type":"DataRange1d"},"y_scale":{"id":"2d09d17e-764b-4300-ac32-958d0ff2814a","type":"LinearScale"}},"id":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2d09d17e-764b-4300-ac32-958d0ff2814a","type":"LinearScale"},{"attributes":{"formatter":{"id":"18b9ff6b-ed4e-4b3c-9f2a-653b27b36f80","type":"BasicTickFormatter"},"plot":{"id":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"46d45849-470a-4dd3-bc9a-39e39b2b6cd4","type":"BasicTicker"}},"id":"7f65766d-cb54-4ea0-8269-169dd44235dd","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"056c587f-73f6-4fa7-b07c-64465726cda7","type":"BoxAnnotation"},{"attributes":{},"id":"46d45849-470a-4dd3-bc9a-39e39b2b6cd4","type":"BasicTicker"},{"attributes":{},"id":"045a415a-fd32-42ba-a6b0-b3018e6f53c2","type":"LinearScale"},{"attributes":{},"id":"d04b4408-71d7-4107-8d94-9d691b0e3701","type":"ToolEvents"},{"attributes":{"plot":{"id":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f8ae9d4-52ca-421e-bb60-60d6ef890040","type":"BasicTicker"}},"id":"e085b033-6044-4d42-aae4-15e38796a66f","type":"Grid"},{"attributes":{},"id":"6f8ae9d4-52ca-421e-bb60-60d6ef890040","type":"BasicTicker"},{"attributes":{"formatter":{"id":"aaac9565-ee42-4bc1-83d1-9d1264e781b6","type":"BasicTickFormatter"},"plot":{"id":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f8ae9d4-52ca-421e-bb60-60d6ef890040","type":"BasicTicker"}},"id":"e17efca0-c73c-4a2d-accd-467648ac932a","type":"LinearAxis"},{"attributes":{"overlay":{"id":"056c587f-73f6-4fa7-b07c-64465726cda7","type":"BoxAnnotation"},"plot":{"id":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1","subtype":"Figure","type":"Plot"}},"id":"f2793393-63ee-419e-b0e1-348e0b6fbdfb","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1","subtype":"Figure","type":"Plot"},"ticker":{"id":"46d45849-470a-4dd3-bc9a-39e39b2b6cd4","type":"BasicTicker"}},"id":"9bf35955-fb8f-4cf9-ae8c-715dff15c84f","type":"Grid"}],"root_ids":["38f1729b-8e31-4a26-9fa2-e914b74cf4b1"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"b282685b-c4a1-4ec8-bed7-b24bef39e876","elementid":"70520e06-cace-4db5-84ed-070f679e96a5","modelid":"38f1729b-8e31-4a26-9fa2-e914b74cf4b1"}];
                
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
