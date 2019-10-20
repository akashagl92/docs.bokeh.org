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
      };var element = document.getElementById("1d538d8f-5005-488b-b8eb-6a03e05f8ec9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1d538d8f-5005-488b-b8eb-6a03e05f8ec9' but no matching script tag was found. ")
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
                var docs_json = {"c054d446-cd80-4889-99fe-feadb7938788":{"roots":{"references":[{"attributes":{"formatter":{"id":"0a48742f-2a38-4cac-95d1-fd7fbb50ddaa","type":"BasicTickFormatter"},"plot":{"id":"35afb22f-15ae-425d-ac1c-38be08d1194c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0910eec-9662-41a0-b35d-37a2318910d1","type":"BasicTicker"}},"id":"d14a036b-f7ae-4bb4-a4ce-f289837f8b64","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"35afb22f-15ae-425d-ac1c-38be08d1194c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ed7f4ab-70d7-4c0d-a7ce-d5b89c9d34c3","type":"BasicTicker"}},"id":"7bdaf16d-8aed-49d2-b9b0-06495a0701f3","type":"Grid"},{"attributes":{"plot":{"id":"35afb22f-15ae-425d-ac1c-38be08d1194c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f0910eec-9662-41a0-b35d-37a2318910d1","type":"BasicTicker"}},"id":"db20e1d6-5407-446a-93a6-716ca10a7954","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5195d701-0f46-46aa-b4c6-ec10db668e7b","type":"PanTool"},{"id":"ee4fca65-c26b-4a70-b69b-d9b433fb6570","type":"WheelZoomTool"},{"id":"2dad7d19-9752-42ba-a560-9219c206d451","type":"BoxZoomTool"},{"id":"ff1a4c31-ddc2-414a-8f32-538ca4e7c6d2","type":"SaveTool"},{"id":"b4432ae0-430c-4cb2-93fe-edcf13df7fa5","type":"ResetTool"},{"id":"c38b3aa7-feac-455c-9b6a-69939d264c9d","type":"HelpTool"}]},"id":"f2e68c8b-ea29-4235-a113-c6f5d46f18e0","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#FDAE6B"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"97285e25-46a3-492b-8baa-997a15908c5a","type":"SquareX"},{"attributes":{"callback":null,"column_names":["size","x","y"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"634126f6-dbd0-41d9-89c9-2fe652b6a428","type":"ColumnDataSource"},{"attributes":{},"id":"4cfad64d-1e8d-435a-889f-d4877de36f1f","type":"ToolEvents"},{"attributes":{"below":[{"id":"d14a036b-f7ae-4bb4-a4ce-f289837f8b64","type":"LinearAxis"}],"left":[{"id":"a1e63100-de7d-430f-9bf1-89362e98486b","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d14a036b-f7ae-4bb4-a4ce-f289837f8b64","type":"LinearAxis"},{"id":"db20e1d6-5407-446a-93a6-716ca10a7954","type":"Grid"},{"id":"a1e63100-de7d-430f-9bf1-89362e98486b","type":"LinearAxis"},{"id":"7bdaf16d-8aed-49d2-b9b0-06495a0701f3","type":"Grid"},{"id":"9e2fec96-5e36-46e0-bb7d-8f693d9658c3","type":"BoxAnnotation"},{"id":"029a5157-b3d9-4d04-b984-c24fb41a2480","type":"GlyphRenderer"}],"title":{"id":"79abdbe4-deca-4499-affb-d3978ac464b9","type":"Title"},"tool_events":{"id":"4cfad64d-1e8d-435a-889f-d4877de36f1f","type":"ToolEvents"},"toolbar":{"id":"f2e68c8b-ea29-4235-a113-c6f5d46f18e0","type":"Toolbar"},"x_range":{"id":"b5f854d7-ac7a-4bf7-bb9e-9210a46a6a9c","type":"DataRange1d"},"y_range":{"id":"6c111667-921d-41b5-be20-51f579a20131","type":"DataRange1d"}},"id":"35afb22f-15ae-425d-ac1c-38be08d1194c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"35afb22f-15ae-425d-ac1c-38be08d1194c","subtype":"Figure","type":"Plot"}},"id":"5195d701-0f46-46aa-b4c6-ec10db668e7b","type":"PanTool"},{"attributes":{"callback":null},"id":"b5f854d7-ac7a-4bf7-bb9e-9210a46a6a9c","type":"DataRange1d"},{"attributes":{},"id":"6c784777-9612-422e-8e6b-7c5b8975e439","type":"BasicTickFormatter"},{"attributes":{},"id":"0a48742f-2a38-4cac-95d1-fd7fbb50ddaa","type":"BasicTickFormatter"},{"attributes":{},"id":"8ed7f4ab-70d7-4c0d-a7ce-d5b89c9d34c3","type":"BasicTicker"},{"attributes":{"data_source":{"id":"634126f6-dbd0-41d9-89c9-2fe652b6a428","type":"ColumnDataSource"},"glyph":{"id":"97285e25-46a3-492b-8baa-997a15908c5a","type":"SquareX"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"83e5d36a-50d1-4955-8ac9-c155f8ef84c1","type":"SquareX"},"selection_glyph":null},"id":"029a5157-b3d9-4d04-b984-c24fb41a2480","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"6c111667-921d-41b5-be20-51f579a20131","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"83e5d36a-50d1-4955-8ac9-c155f8ef84c1","type":"SquareX"},{"attributes":{"plot":{"id":"35afb22f-15ae-425d-ac1c-38be08d1194c","subtype":"Figure","type":"Plot"}},"id":"ff1a4c31-ddc2-414a-8f32-538ca4e7c6d2","type":"SaveTool"},{"attributes":{"plot":{"id":"35afb22f-15ae-425d-ac1c-38be08d1194c","subtype":"Figure","type":"Plot"}},"id":"ee4fca65-c26b-4a70-b69b-d9b433fb6570","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"35afb22f-15ae-425d-ac1c-38be08d1194c","subtype":"Figure","type":"Plot"}},"id":"c38b3aa7-feac-455c-9b6a-69939d264c9d","type":"HelpTool"},{"attributes":{"formatter":{"id":"6c784777-9612-422e-8e6b-7c5b8975e439","type":"BasicTickFormatter"},"plot":{"id":"35afb22f-15ae-425d-ac1c-38be08d1194c","subtype":"Figure","type":"Plot"},"ticker":{"id":"8ed7f4ab-70d7-4c0d-a7ce-d5b89c9d34c3","type":"BasicTicker"}},"id":"a1e63100-de7d-430f-9bf1-89362e98486b","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"79abdbe4-deca-4499-affb-d3978ac464b9","type":"Title"},{"attributes":{"plot":{"id":"35afb22f-15ae-425d-ac1c-38be08d1194c","subtype":"Figure","type":"Plot"}},"id":"b4432ae0-430c-4cb2-93fe-edcf13df7fa5","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9e2fec96-5e36-46e0-bb7d-8f693d9658c3","type":"BoxAnnotation"},{"attributes":{},"id":"f0910eec-9662-41a0-b35d-37a2318910d1","type":"BasicTicker"},{"attributes":{"overlay":{"id":"9e2fec96-5e36-46e0-bb7d-8f693d9658c3","type":"BoxAnnotation"},"plot":{"id":"35afb22f-15ae-425d-ac1c-38be08d1194c","subtype":"Figure","type":"Plot"}},"id":"2dad7d19-9752-42ba-a560-9219c206d451","type":"BoxZoomTool"}],"root_ids":["35afb22f-15ae-425d-ac1c-38be08d1194c"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"c054d446-cd80-4889-99fe-feadb7938788","elementid":"1d538d8f-5005-488b-b8eb-6a03e05f8ec9","modelid":"35afb22f-15ae-425d-ac1c-38be08d1194c"}];
                
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
