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
      };var element = document.getElementById("1941576f-3036-49f9-a809-f5f4ee3fefff");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1941576f-3036-49f9-a809-f5f4ee3fefff' but no matching script tag was found. ")
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
                var docs_json = {"6b0086f8-e06a-4c97-b7ec-20f20fb9ec53":{"roots":{"references":[{"attributes":{},"id":"2c598fb1-79ff-4a04-be96-746b7360d993","type":"BasicTickFormatter"},{"attributes":{},"id":"9c535a9a-b8d7-409c-9fa9-a23bd0211fe0","type":"BasicTicker"},{"attributes":{"callback":null},"id":"295900f5-e25e-4dd7-a6d2-ad32822603ae","type":"DataRange1d"},{"attributes":{"plot":{"id":"5b503dcd-8874-4365-b651-3a926b1d1be9","subtype":"Figure","type":"Plot"}},"id":"0bef8428-8596-4cfc-845b-40012077713e","type":"WheelZoomTool"},{"attributes":{},"id":"ce212b88-7e0a-4b8a-8abe-cfd8851c727a","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ab2695f4-7308-42f1-a907-14e32d2fd2c6","type":"PanTool"},{"id":"0bef8428-8596-4cfc-845b-40012077713e","type":"WheelZoomTool"},{"id":"48ea9643-cd4d-4597-9c84-9ce7eb6ca1c9","type":"BoxZoomTool"},{"id":"dc0a66ee-56fb-41a9-a47a-2f57617d4919","type":"SaveTool"},{"id":"dcc31ee1-bd84-416c-853e-aaa48f84b277","type":"ResetTool"},{"id":"8b0da730-6cef-4a97-9fef-73dd18961be8","type":"HelpTool"}]},"id":"95b56891-b69b-4956-a7f9-8e35ec0a18a8","type":"Toolbar"},{"attributes":{"data_source":{"id":"bbc392ae-f77e-42c8-8653-19b0c5ae67c2","type":"ColumnDataSource"},"glyph":{"id":"cce7e2b5-58ed-43cf-82e7-46b890e536c6","type":"Oval"},"hover_glyph":null,"nonselection_glyph":{"id":"250c2b01-042b-43f8-873f-ed0e3715e433","type":"Oval"},"selection_glyph":null},"id":"693a1cd2-8c46-4305-946f-d8746baa8e18","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"5b503dcd-8874-4365-b651-3a926b1d1be9","subtype":"Figure","type":"Plot"}},"id":"ab2695f4-7308-42f1-a907-14e32d2fd2c6","type":"PanTool"},{"attributes":{"formatter":{"id":"5ba27085-7d46-42b6-878f-2bdd1fb1fa3c","type":"BasicTickFormatter"},"plot":{"id":"5b503dcd-8874-4365-b651-3a926b1d1be9","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce212b88-7e0a-4b8a-8abe-cfd8851c727a","type":"BasicTicker"}},"id":"75314279-22ec-4df2-8289-40a444d54c95","type":"LinearAxis"},{"attributes":{"overlay":{"id":"44316620-2ced-43ef-b02d-4c1688a827ac","type":"BoxAnnotation"},"plot":{"id":"5b503dcd-8874-4365-b651-3a926b1d1be9","subtype":"Figure","type":"Plot"}},"id":"48ea9643-cd4d-4597-9c84-9ce7eb6ca1c9","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"97d6e209-03ba-4080-b252-a9c14745cc0a","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"bbc392ae-f77e-42c8-8653-19b0c5ae67c2","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"5b503dcd-8874-4365-b651-3a926b1d1be9","subtype":"Figure","type":"Plot"}},"id":"dc0a66ee-56fb-41a9-a47a-2f57617d4919","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"5b503dcd-8874-4365-b651-3a926b1d1be9","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c535a9a-b8d7-409c-9fa9-a23bd0211fe0","type":"BasicTicker"}},"id":"f337ffd6-d03c-4ae7-9c92-2a5b0c3c9891","type":"Grid"},{"attributes":{},"id":"7bb328e3-1db1-498c-b32f-fb1de39d1ca8","type":"ToolEvents"},{"attributes":{"plot":null,"text":""},"id":"5256a56b-344f-4424-a62d-e78c0fabb392","type":"Title"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"screen","value":40},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"250c2b01-042b-43f8-873f-ed0e3715e433","type":"Oval"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"44316620-2ced-43ef-b02d-4c1688a827ac","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"75314279-22ec-4df2-8289-40a444d54c95","type":"LinearAxis"}],"left":[{"id":"b18000fe-a900-4dd4-9ed9-c08e65680ff1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"75314279-22ec-4df2-8289-40a444d54c95","type":"LinearAxis"},{"id":"8cef822c-d2de-4218-9e96-7de6091e5441","type":"Grid"},{"id":"b18000fe-a900-4dd4-9ed9-c08e65680ff1","type":"LinearAxis"},{"id":"f337ffd6-d03c-4ae7-9c92-2a5b0c3c9891","type":"Grid"},{"id":"44316620-2ced-43ef-b02d-4c1688a827ac","type":"BoxAnnotation"},{"id":"693a1cd2-8c46-4305-946f-d8746baa8e18","type":"GlyphRenderer"}],"title":{"id":"5256a56b-344f-4424-a62d-e78c0fabb392","type":"Title"},"tool_events":{"id":"7bb328e3-1db1-498c-b32f-fb1de39d1ca8","type":"ToolEvents"},"toolbar":{"id":"95b56891-b69b-4956-a7f9-8e35ec0a18a8","type":"Toolbar"},"x_range":{"id":"97d6e209-03ba-4080-b252-a9c14745cc0a","type":"DataRange1d"},"y_range":{"id":"295900f5-e25e-4dd7-a6d2-ad32822603ae","type":"DataRange1d"}},"id":"5b503dcd-8874-4365-b651-3a926b1d1be9","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"5b503dcd-8874-4365-b651-3a926b1d1be9","subtype":"Figure","type":"Plot"}},"id":"8b0da730-6cef-4a97-9fef-73dd18961be8","type":"HelpTool"},{"attributes":{"plot":{"id":"5b503dcd-8874-4365-b651-3a926b1d1be9","subtype":"Figure","type":"Plot"}},"id":"dcc31ee1-bd84-416c-853e-aaa48f84b277","type":"ResetTool"},{"attributes":{},"id":"5ba27085-7d46-42b6-878f-2bdd1fb1fa3c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"2c598fb1-79ff-4a04-be96-746b7360d993","type":"BasicTickFormatter"},"plot":{"id":"5b503dcd-8874-4365-b651-3a926b1d1be9","subtype":"Figure","type":"Plot"},"ticker":{"id":"9c535a9a-b8d7-409c-9fa9-a23bd0211fe0","type":"BasicTicker"}},"id":"b18000fe-a900-4dd4-9ed9-c08e65680ff1","type":"LinearAxis"},{"attributes":{"plot":{"id":"5b503dcd-8874-4365-b651-3a926b1d1be9","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce212b88-7e0a-4b8a-8abe-cfd8851c727a","type":"BasicTicker"}},"id":"8cef822c-d2de-4218-9e96-7de6091e5441","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"screen","value":40},"line_color":{"value":"#CAB2D6"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"cce7e2b5-58ed-43cf-82e7-46b890e536c6","type":"Oval"}],"root_ids":["5b503dcd-8874-4365-b651-3a926b1d1be9"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"6b0086f8-e06a-4c97-b7ec-20f20fb9ec53","elementid":"1941576f-3036-49f9-a809-f5f4ee3fefff","modelid":"5b503dcd-8874-4365-b651-3a926b1d1be9"}];
                
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
