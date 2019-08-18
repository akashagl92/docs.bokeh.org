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
      };var element = document.getElementById("71cb44ec-21c0-40a0-9874-d1157d9527d0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '71cb44ec-21c0-40a0-9874-d1157d9527d0' but no matching script tag was found. ")
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
                var docs_json = {"e780546b-9cc8-4477-808e-5c09cbfa254f":{"roots":{"references":[{"attributes":{"data_source":{"id":"b36f982e-5486-474b-b3d4-6d857b206862","type":"ColumnDataSource"},"glyph":{"id":"d4c3a1d6-36da-4527-958d-19e922a05d50","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b3a902ec-d2c7-4a21-bb68-2d4cd18c3d14","type":"Patch"},"selection_glyph":null},"id":"13d2ce7f-f75e-423e-92cc-95402169e439","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"b1a5c398-8792-4af1-a545-a1ee46f0dcc4","type":"LinearAxis"}],"left":[{"id":"6df96f43-7276-4dd1-bd63-3c151c0a45e2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b1a5c398-8792-4af1-a545-a1ee46f0dcc4","type":"LinearAxis"},{"id":"d8f786b8-c785-47d1-89f5-f3809b324443","type":"Grid"},{"id":"6df96f43-7276-4dd1-bd63-3c151c0a45e2","type":"LinearAxis"},{"id":"8d0157f0-5e0c-4f66-b613-a8f2bc107597","type":"Grid"},{"id":"7378f1bb-b877-43dc-acda-c13a7a061347","type":"BoxAnnotation"},{"id":"13d2ce7f-f75e-423e-92cc-95402169e439","type":"GlyphRenderer"}],"title":{"id":"409e1db6-d267-429d-b7e5-5f70d6f30cbc","type":"Title"},"tool_events":{"id":"95e7be74-5bed-4e75-a2e2-bdd0f8d241a6","type":"ToolEvents"},"toolbar":{"id":"98a2eaca-0aed-42a8-b3fd-cd79d7e20977","type":"Toolbar"},"x_range":{"id":"2fafbda6-8185-433f-8216-7cb4b680b4d8","type":"DataRange1d"},"y_range":{"id":"4e8a03f7-4ec0-4b68-95ef-c816fd30e1f2","type":"DataRange1d"}},"id":"a7ecad7a-59dc-4f87-aeaf-f17850726271","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#99d8c9"},"line_color":{"value":"#99d8c9"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4c3a1d6-36da-4527-958d-19e922a05d50","type":"Patch"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b3a902ec-d2c7-4a21-bb68-2d4cd18c3d14","type":"Patch"},{"attributes":{"plot":{"id":"a7ecad7a-59dc-4f87-aeaf-f17850726271","subtype":"Figure","type":"Plot"}},"id":"1f61a8c5-2f5f-4606-83cc-cb36e91f5a78","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"4e8a03f7-4ec0-4b68-95ef-c816fd30e1f2","type":"DataRange1d"},{"attributes":{"formatter":{"id":"18aeb4f8-513d-4177-a14c-0f381bb794ef","type":"BasicTickFormatter"},"plot":{"id":"a7ecad7a-59dc-4f87-aeaf-f17850726271","subtype":"Figure","type":"Plot"},"ticker":{"id":"9854618a-7a96-44de-8adc-ee8876c65ad6","type":"BasicTicker"}},"id":"6df96f43-7276-4dd1-bd63-3c151c0a45e2","type":"LinearAxis"},{"attributes":{"overlay":{"id":"7378f1bb-b877-43dc-acda-c13a7a061347","type":"BoxAnnotation"},"plot":{"id":"a7ecad7a-59dc-4f87-aeaf-f17850726271","subtype":"Figure","type":"Plot"}},"id":"6b8bde7e-7080-4562-875a-872e8de170d1","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"a7ecad7a-59dc-4f87-aeaf-f17850726271","subtype":"Figure","type":"Plot"}},"id":"5dc6dd94-e653-4240-8f4e-9787d5dd1d31","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5dc6dd94-e653-4240-8f4e-9787d5dd1d31","type":"PanTool"},{"id":"1f61a8c5-2f5f-4606-83cc-cb36e91f5a78","type":"WheelZoomTool"},{"id":"6b8bde7e-7080-4562-875a-872e8de170d1","type":"BoxZoomTool"},{"id":"96e773ff-fc81-4da0-90d6-6cdb6a4f86db","type":"SaveTool"},{"id":"5cd8c5ae-f721-4473-bf9e-1830f327cd92","type":"ResetTool"},{"id":"fb1e2619-7fa2-4509-bc99-ef0bd4997c20","type":"HelpTool"}]},"id":"98a2eaca-0aed-42a8-b3fd-cd79d7e20977","type":"Toolbar"},{"attributes":{},"id":"95e7be74-5bed-4e75-a2e2-bdd0f8d241a6","type":"ToolEvents"},{"attributes":{},"id":"29257137-11c6-4645-8755-b657d5221063","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"29257137-11c6-4645-8755-b657d5221063","type":"BasicTickFormatter"},"plot":{"id":"a7ecad7a-59dc-4f87-aeaf-f17850726271","subtype":"Figure","type":"Plot"},"ticker":{"id":"55288237-d476-4e04-8061-4369855e4bd8","type":"BasicTicker"}},"id":"b1a5c398-8792-4af1-a545-a1ee46f0dcc4","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"409e1db6-d267-429d-b7e5-5f70d6f30cbc","type":"Title"},{"attributes":{"plot":{"id":"a7ecad7a-59dc-4f87-aeaf-f17850726271","subtype":"Figure","type":"Plot"}},"id":"96e773ff-fc81-4da0-90d6-6cdb6a4f86db","type":"SaveTool"},{"attributes":{},"id":"9854618a-7a96-44de-8adc-ee8876c65ad6","type":"BasicTicker"},{"attributes":{"plot":{"id":"a7ecad7a-59dc-4f87-aeaf-f17850726271","subtype":"Figure","type":"Plot"},"ticker":{"id":"55288237-d476-4e04-8061-4369855e4bd8","type":"BasicTicker"}},"id":"d8f786b8-c785-47d1-89f5-f3809b324443","type":"Grid"},{"attributes":{"callback":null},"id":"2fafbda6-8185-433f-8216-7cb4b680b4d8","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,2],"y":[6,7,2,2]}},"id":"b36f982e-5486-474b-b3d4-6d857b206862","type":"ColumnDataSource"},{"attributes":{},"id":"18aeb4f8-513d-4177-a14c-0f381bb794ef","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"a7ecad7a-59dc-4f87-aeaf-f17850726271","subtype":"Figure","type":"Plot"},"ticker":{"id":"9854618a-7a96-44de-8adc-ee8876c65ad6","type":"BasicTicker"}},"id":"8d0157f0-5e0c-4f66-b613-a8f2bc107597","type":"Grid"},{"attributes":{},"id":"55288237-d476-4e04-8061-4369855e4bd8","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7378f1bb-b877-43dc-acda-c13a7a061347","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"a7ecad7a-59dc-4f87-aeaf-f17850726271","subtype":"Figure","type":"Plot"}},"id":"fb1e2619-7fa2-4509-bc99-ef0bd4997c20","type":"HelpTool"},{"attributes":{"plot":{"id":"a7ecad7a-59dc-4f87-aeaf-f17850726271","subtype":"Figure","type":"Plot"}},"id":"5cd8c5ae-f721-4473-bf9e-1830f327cd92","type":"ResetTool"}],"root_ids":["a7ecad7a-59dc-4f87-aeaf-f17850726271"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"e780546b-9cc8-4477-808e-5c09cbfa254f","elementid":"71cb44ec-21c0-40a0-9874-d1157d9527d0","modelid":"a7ecad7a-59dc-4f87-aeaf-f17850726271"}];
                
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
