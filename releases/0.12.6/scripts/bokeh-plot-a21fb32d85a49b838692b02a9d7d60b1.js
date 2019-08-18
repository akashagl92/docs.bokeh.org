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
      };var element = document.getElementById("a6d7f405-f30f-411f-80f1-d463b20f5cf5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a6d7f405-f30f-411f-80f1-d463b20f5cf5' but no matching script tag was found. ")
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
                var docs_json = {"f3408ef5-5b1c-4043-ad02-042fbbbdc375":{"roots":{"references":[{"attributes":{"plot":{"id":"7014bc4e-df10-4624-9409-abed157939e8","subtype":"Figure","type":"Plot"}},"id":"032260e7-f081-47d1-86d2-5993d9e2511e","type":"PanTool"},{"attributes":{"plot":{"id":"7014bc4e-df10-4624-9409-abed157939e8","subtype":"Figure","type":"Plot"}},"id":"1986f538-9ad3-42ab-b410-b5e13c9938f5","type":"WheelZoomTool"},{"attributes":{},"id":"a7fb5961-446d-4521-a016-a4c1952662a4","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"032260e7-f081-47d1-86d2-5993d9e2511e","type":"PanTool"},{"id":"1986f538-9ad3-42ab-b410-b5e13c9938f5","type":"WheelZoomTool"},{"id":"27e7703f-aa0a-4eda-8428-b0e10a059937","type":"BoxZoomTool"},{"id":"9be830b9-72de-46ad-be6c-2c575b2be9a9","type":"SaveTool"},{"id":"bcc1f8fa-a84f-4c9d-b072-1df02bfe06ec","type":"ResetTool"},{"id":"d606d810-2ac1-4045-8121-77bf3f3b2d11","type":"HelpTool"}]},"id":"e1bfc4c3-c976-44d4-b0b0-bd8be1b02fb5","type":"Toolbar"},{"attributes":{},"id":"848ba6d8-a377-40a1-961f-d331a9606d52","type":"ToolEvents"},{"attributes":{"data_source":{"id":"e10c0df2-0537-4972-a90b-8fd617e1b735","type":"ColumnDataSource"},"glyph":{"id":"329dc832-b603-4c1e-8bbf-48763efb5710","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f1127306-1be1-4bc4-aa18-c0c04fa8e3a9","type":"Patch"},"selection_glyph":null},"id":"aae06362-b00c-41e0-adf9-1eb12335bc5d","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f1127306-1be1-4bc4-aa18-c0c04fa8e3a9","type":"Patch"},{"attributes":{"below":[{"id":"79b795f9-e448-40e7-9c43-cf789dc74f42","type":"LinearAxis"}],"left":[{"id":"ad46a366-eb45-4425-b0ed-907f06477b4c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"79b795f9-e448-40e7-9c43-cf789dc74f42","type":"LinearAxis"},{"id":"9193fca1-cd7f-4f9f-aae4-dcfcbf19698b","type":"Grid"},{"id":"ad46a366-eb45-4425-b0ed-907f06477b4c","type":"LinearAxis"},{"id":"ba9bd585-a10c-4b63-b161-5a7981815175","type":"Grid"},{"id":"b4684aa5-2d5a-4cdd-8bbb-8d3a432f968b","type":"BoxAnnotation"},{"id":"aae06362-b00c-41e0-adf9-1eb12335bc5d","type":"GlyphRenderer"}],"title":{"id":"56654c2b-fac5-4959-90c6-f83d56785c87","type":"Title"},"tool_events":{"id":"848ba6d8-a377-40a1-961f-d331a9606d52","type":"ToolEvents"},"toolbar":{"id":"e1bfc4c3-c976-44d4-b0b0-bd8be1b02fb5","type":"Toolbar"},"x_range":{"id":"ff0ca133-1fca-4d58-b1ba-788545ed466f","type":"DataRange1d"},"x_scale":{"id":"1953f27d-f5d4-4b03-9696-c123b133ad15","type":"LinearScale"},"y_range":{"id":"9e2de29f-9801-4562-be89-31557da7e258","type":"DataRange1d"},"y_scale":{"id":"d0e5c0fa-a835-498a-a43a-2fb81db3882c","type":"LinearScale"}},"id":"7014bc4e-df10-4624-9409-abed157939e8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d0e5c0fa-a835-498a-a43a-2fb81db3882c","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"56654c2b-fac5-4959-90c6-f83d56785c87","type":"Title"},{"attributes":{"callback":null},"id":"ff0ca133-1fca-4d58-b1ba-788545ed466f","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"7014bc4e-df10-4624-9409-abed157939e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"d921fbeb-94eb-4db7-b171-196bff6d4746","type":"BasicTicker"}},"id":"ba9bd585-a10c-4b63-b161-5a7981815175","type":"Grid"},{"attributes":{"plot":{"id":"7014bc4e-df10-4624-9409-abed157939e8","subtype":"Figure","type":"Plot"}},"id":"d606d810-2ac1-4045-8121-77bf3f3b2d11","type":"HelpTool"},{"attributes":{},"id":"077e7e23-0ecd-4e0c-b820-b383fb6cee4c","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"329dc832-b603-4c1e-8bbf-48763efb5710","type":"Patch"},{"attributes":{"formatter":{"id":"077e7e23-0ecd-4e0c-b820-b383fb6cee4c","type":"BasicTickFormatter"},"plot":{"id":"7014bc4e-df10-4624-9409-abed157939e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"d921fbeb-94eb-4db7-b171-196bff6d4746","type":"BasicTicker"}},"id":"ad46a366-eb45-4425-b0ed-907f06477b4c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"e10c0df2-0537-4972-a90b-8fd617e1b735","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7014bc4e-df10-4624-9409-abed157939e8","subtype":"Figure","type":"Plot"}},"id":"bcc1f8fa-a84f-4c9d-b072-1df02bfe06ec","type":"ResetTool"},{"attributes":{},"id":"1953f27d-f5d4-4b03-9696-c123b133ad15","type":"LinearScale"},{"attributes":{"callback":null},"id":"9e2de29f-9801-4562-be89-31557da7e258","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b4684aa5-2d5a-4cdd-8bbb-8d3a432f968b","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"a7fb5961-446d-4521-a016-a4c1952662a4","type":"BasicTickFormatter"},"plot":{"id":"7014bc4e-df10-4624-9409-abed157939e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"7bef5e6d-4408-438a-ba84-cc7d1a372850","type":"BasicTicker"}},"id":"79b795f9-e448-40e7-9c43-cf789dc74f42","type":"LinearAxis"},{"attributes":{"overlay":{"id":"b4684aa5-2d5a-4cdd-8bbb-8d3a432f968b","type":"BoxAnnotation"},"plot":{"id":"7014bc4e-df10-4624-9409-abed157939e8","subtype":"Figure","type":"Plot"}},"id":"27e7703f-aa0a-4eda-8428-b0e10a059937","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"7014bc4e-df10-4624-9409-abed157939e8","subtype":"Figure","type":"Plot"},"ticker":{"id":"7bef5e6d-4408-438a-ba84-cc7d1a372850","type":"BasicTicker"}},"id":"9193fca1-cd7f-4f9f-aae4-dcfcbf19698b","type":"Grid"},{"attributes":{},"id":"d921fbeb-94eb-4db7-b171-196bff6d4746","type":"BasicTicker"},{"attributes":{"plot":{"id":"7014bc4e-df10-4624-9409-abed157939e8","subtype":"Figure","type":"Plot"}},"id":"9be830b9-72de-46ad-be6c-2c575b2be9a9","type":"SaveTool"},{"attributes":{},"id":"7bef5e6d-4408-438a-ba84-cc7d1a372850","type":"BasicTicker"}],"root_ids":["7014bc4e-df10-4624-9409-abed157939e8"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"f3408ef5-5b1c-4043-ad02-042fbbbdc375","elementid":"a6d7f405-f30f-411f-80f1-d463b20f5cf5","modelid":"7014bc4e-df10-4624-9409-abed157939e8"}];
                
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
