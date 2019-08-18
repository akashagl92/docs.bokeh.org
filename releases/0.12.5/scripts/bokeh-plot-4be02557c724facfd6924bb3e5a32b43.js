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
      };var element = document.getElementById("ce7709a1-9e2e-4681-97f0-d637025cee77");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ce7709a1-9e2e-4681-97f0-d637025cee77' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"8c3d7e62-19e9-421d-8604-d4885104045e":{"roots":{"references":[{"attributes":{"level":"glyph","plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"},"source":{"id":"98afbd63-bd8a-4a1a-99ea-fd35bba46258","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"98f0c651-cc0b-47c9-bb61-a4c42d2b22aa","type":"LabelSet"},{"attributes":{"dimension":1,"plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"},"ticker":{"id":"ef4c13a6-8066-470a-ae43-5fac703b8de3","type":"BasicTicker"}},"id":"0ad2e448-48dd-4e9f-b651-4daad7186701","type":"Grid"},{"attributes":{"data_source":{"id":"98afbd63-bd8a-4a1a-99ea-fd35bba46258","type":"ColumnDataSource"},"glyph":{"id":"52cbbafc-9eaa-4b6f-871b-b4579965bedd","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b9857b7b-baa0-4f65-a70a-6329eaa86120","type":"Circle"},"selection_glyph":null},"id":"ab647482-1bdc-43e7-958e-f6d67529848e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"}},"id":"e66ad672-6c7b-43df-a75f-c238fae8ab3e","type":"ResetTool"},{"attributes":{"callback":null},"id":"458a58dc-6deb-4396-a997-eda59fe09bb2","type":"DataRange1d"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"451a9918-c2ed-4a70-b3e1-1ecb39aaad3b","type":"Label"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"3dc4dd75-d00a-4ec8-8129-cb706ca18490","type":"BasicTickFormatter"},"plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"},"ticker":{"id":"5722b8fc-b802-438d-a808-fb510b702f95","type":"BasicTicker"}},"id":"5c085725-6ef9-47d9-ba66-44d0805e258c","type":"LinearAxis"},{"attributes":{},"id":"f68f5bfe-edf0-4f97-98e8-1035c11a88a4","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dd5aece3-1ed5-404c-9f45-834e438c6867","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"}},"id":"c5ae9ae7-1f9f-4c11-a9fb-8b9cc9c8da24","type":"PanTool"},{"attributes":{"callback":null,"column_names":["height","names","weight"],"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]}},"id":"98afbd63-bd8a-4a1a-99ea-fd35bba46258","type":"ColumnDataSource"},{"attributes":{},"id":"5722b8fc-b802-438d-a808-fb510b702f95","type":"BasicTicker"},{"attributes":{"plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"}},"id":"a58ec062-cec5-4384-b223-d31c659966c5","type":"HelpTool"},{"attributes":{"plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"},"ticker":{"id":"5722b8fc-b802-438d-a808-fb510b702f95","type":"BasicTicker"}},"id":"1caca4d9-9f26-4e05-9868-8904f931e78f","type":"Grid"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"db194108-41d4-43a3-b7be-f8e74b519db7","type":"Title"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"f68f5bfe-edf0-4f97-98e8-1035c11a88a4","type":"BasicTickFormatter"},"plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"},"ticker":{"id":"ef4c13a6-8066-470a-ae43-5fac703b8de3","type":"BasicTicker"}},"id":"91544a39-94e0-4c10-8833-1f7d2ef87527","type":"LinearAxis"},{"attributes":{"plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"}},"id":"8acf30d0-a5cd-4feb-bd5e-883430144735","type":"WheelZoomTool"},{"attributes":{},"id":"ef4c13a6-8066-470a-ae43-5fac703b8de3","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c5ae9ae7-1f9f-4c11-a9fb-8b9cc9c8da24","type":"PanTool"},{"id":"8acf30d0-a5cd-4feb-bd5e-883430144735","type":"WheelZoomTool"},{"id":"9bcebbaa-5cdb-4b89-99c1-a371c71dacd5","type":"BoxZoomTool"},{"id":"4ddac1d0-aeba-44b4-a617-d22ee4f66d6d","type":"SaveTool"},{"id":"e66ad672-6c7b-43df-a75f-c238fae8ab3e","type":"ResetTool"},{"id":"a58ec062-cec5-4384-b223-d31c659966c5","type":"HelpTool"}]},"id":"666ff4aa-65e8-4d75-aa06-240a5be012c8","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"b9857b7b-baa0-4f65-a70a-6329eaa86120","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"52cbbafc-9eaa-4b6f-871b-b4579965bedd","type":"Circle"},{"attributes":{},"id":"4b066b7d-aea0-4d75-975e-283c478c3553","type":"ToolEvents"},{"attributes":{"overlay":{"id":"dd5aece3-1ed5-404c-9f45-834e438c6867","type":"BoxAnnotation"},"plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"}},"id":"9bcebbaa-5cdb-4b89-99c1-a371c71dacd5","type":"BoxZoomTool"},{"attributes":{"callback":null,"end":275,"start":140},"id":"33f685cc-a260-408f-bb7a-af2b5bb2bf1f","type":"Range1d"},{"attributes":{"plot":{"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"}},"id":"4ddac1d0-aeba-44b4-a617-d22ee4f66d6d","type":"SaveTool"},{"attributes":{"below":[{"id":"5c085725-6ef9-47d9-ba66-44d0805e258c","type":"LinearAxis"}],"left":[{"id":"91544a39-94e0-4c10-8833-1f7d2ef87527","type":"LinearAxis"}],"renderers":[{"id":"5c085725-6ef9-47d9-ba66-44d0805e258c","type":"LinearAxis"},{"id":"1caca4d9-9f26-4e05-9868-8904f931e78f","type":"Grid"},{"id":"91544a39-94e0-4c10-8833-1f7d2ef87527","type":"LinearAxis"},{"id":"0ad2e448-48dd-4e9f-b651-4daad7186701","type":"Grid"},{"id":"dd5aece3-1ed5-404c-9f45-834e438c6867","type":"BoxAnnotation"},{"id":"ab647482-1bdc-43e7-958e-f6d67529848e","type":"GlyphRenderer"},{"id":"98f0c651-cc0b-47c9-bb61-a4c42d2b22aa","type":"LabelSet"},{"id":"451a9918-c2ed-4a70-b3e1-1ecb39aaad3b","type":"Label"}],"title":{"id":"db194108-41d4-43a3-b7be-f8e74b519db7","type":"Title"},"tool_events":{"id":"4b066b7d-aea0-4d75-975e-283c478c3553","type":"ToolEvents"},"toolbar":{"id":"666ff4aa-65e8-4d75-aa06-240a5be012c8","type":"Toolbar"},"x_range":{"id":"33f685cc-a260-408f-bb7a-af2b5bb2bf1f","type":"Range1d"},"y_range":{"id":"458a58dc-6deb-4396-a997-eda59fe09bb2","type":"DataRange1d"}},"id":"9e9853c1-d766-423a-8be2-6edba56cad63","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3dc4dd75-d00a-4ec8-8129-cb706ca18490","type":"BasicTickFormatter"}],"root_ids":["9e9853c1-d766-423a-8be2-6edba56cad63"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"8c3d7e62-19e9-421d-8604-d4885104045e","elementid":"ce7709a1-9e2e-4681-97f0-d637025cee77","modelid":"9e9853c1-d766-423a-8be2-6edba56cad63"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
