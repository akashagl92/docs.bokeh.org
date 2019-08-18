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
      };var element = document.getElementById("24fb9b43-18a0-4ee1-a2a9-908d96967023");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '24fb9b43-18a0-4ee1-a2a9-908d96967023' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6056d5f4-6979-45c3-8cb2-240f56bf1ac5":{"roots":{"references":[{"attributes":{"plot":{"id":"bd57b6ea-6fd6-4fac-8659-19b426b422c1","subtype":"Figure","type":"Plot"}},"id":"362a7afd-972f-42a6-a39f-3ffccdf7ac7c","type":"PanTool"},{"attributes":{"plot":{"id":"bd57b6ea-6fd6-4fac-8659-19b426b422c1","subtype":"Figure","type":"Plot"}},"id":"e4a13709-799e-4800-957a-b9ff5f0f460a","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a7200f30-d2e2-4570-8895-1ed3bd5c8d22","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"bd57b6ea-6fd6-4fac-8659-19b426b422c1","subtype":"Figure","type":"Plot"}},"id":"bb7642cd-6951-427b-81a3-585c9451b536","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":null},"id":"f065d900-6a9f-4077-be37-4ccdd50e55f9","type":"Title"},{"attributes":{"formatter":{"id":"40d7c9c4-9af3-4992-9d57-4af7314d5f0b","type":"BasicTickFormatter"},"plot":{"id":"bd57b6ea-6fd6-4fac-8659-19b426b422c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"89af9fa1-b7e9-4b9f-b6a7-91fc5f8aba06","type":"BasicTicker"}},"id":"1f659912-ef90-4a25-b58f-a7ff5d6f4c00","type":"LinearAxis"},{"attributes":{"data_source":{"id":"309a1edb-4e48-4ada-b980-bfa787c3d506","type":"ColumnDataSource"},"glyph":{"id":"3dc8abd4-c95f-4e8b-b4ae-620b0d8c90df","type":"Oval"},"hover_glyph":null,"nonselection_glyph":{"id":"52de2083-732d-43b3-b8d0-941fe6a20c63","type":"Oval"},"selection_glyph":null},"id":"e190d576-0f56-4fc1-bb17-e47852728283","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"e94bbf85-8736-4ae0-94cb-d3cd83401b3c","type":"LinearAxis"}],"left":[{"id":"1f659912-ef90-4a25-b58f-a7ff5d6f4c00","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e94bbf85-8736-4ae0-94cb-d3cd83401b3c","type":"LinearAxis"},{"id":"c920c535-0478-4656-bd0f-9d57e28547bf","type":"Grid"},{"id":"1f659912-ef90-4a25-b58f-a7ff5d6f4c00","type":"LinearAxis"},{"id":"bd56e176-289a-4fb4-8834-886f75af2e44","type":"Grid"},{"id":"a7200f30-d2e2-4570-8895-1ed3bd5c8d22","type":"BoxAnnotation"},{"id":"e190d576-0f56-4fc1-bb17-e47852728283","type":"GlyphRenderer"}],"title":{"id":"f065d900-6a9f-4077-be37-4ccdd50e55f9","type":"Title"},"tool_events":{"id":"18f2be48-74f3-453a-a0d8-4688eb2aa4e8","type":"ToolEvents"},"toolbar":{"id":"d6e204fd-b4f5-498b-8304-e90b7d8584bb","type":"Toolbar"},"x_range":{"id":"9376b18a-47d4-42fa-97e1-50f7ebcf8b3b","type":"DataRange1d"},"y_range":{"id":"25b79e86-48de-490c-bfbf-bfd413ccf838","type":"DataRange1d"}},"id":"bd57b6ea-6fd6-4fac-8659-19b426b422c1","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"309a1edb-4e48-4ada-b980-bfa787c3d506","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"362a7afd-972f-42a6-a39f-3ffccdf7ac7c","type":"PanTool"},{"id":"bb7642cd-6951-427b-81a3-585c9451b536","type":"WheelZoomTool"},{"id":"0056c543-c71c-479b-b358-988e680f5eae","type":"BoxZoomTool"},{"id":"a366327a-6ed0-449f-9aa1-2c8c50a51794","type":"SaveTool"},{"id":"e4a13709-799e-4800-957a-b9ff5f0f460a","type":"ResetTool"},{"id":"2c69e112-1460-4e70-bfa7-98adbd58081b","type":"HelpTool"}]},"id":"d6e204fd-b4f5-498b-8304-e90b7d8584bb","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3dc8abd4-c95f-4e8b-b4ae-620b0d8c90df","type":"Oval"},{"attributes":{},"id":"89af9fa1-b7e9-4b9f-b6a7-91fc5f8aba06","type":"BasicTicker"},{"attributes":{},"id":"40d7c9c4-9af3-4992-9d57-4af7314d5f0b","type":"BasicTickFormatter"},{"attributes":{},"id":"18f2be48-74f3-453a-a0d8-4688eb2aa4e8","type":"ToolEvents"},{"attributes":{"plot":{"id":"bd57b6ea-6fd6-4fac-8659-19b426b422c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"a85665d4-dc60-484a-b99c-29f926e58d6a","type":"BasicTicker"}},"id":"c920c535-0478-4656-bd0f-9d57e28547bf","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"bd57b6ea-6fd6-4fac-8659-19b426b422c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"89af9fa1-b7e9-4b9f-b6a7-91fc5f8aba06","type":"BasicTicker"}},"id":"bd56e176-289a-4fb4-8834-886f75af2e44","type":"Grid"},{"attributes":{"overlay":{"id":"a7200f30-d2e2-4570-8895-1ed3bd5c8d22","type":"BoxAnnotation"},"plot":{"id":"bd57b6ea-6fd6-4fac-8659-19b426b422c1","subtype":"Figure","type":"Plot"}},"id":"0056c543-c71c-479b-b358-988e680f5eae","type":"BoxZoomTool"},{"attributes":{},"id":"330f6563-91e3-445d-b9d5-30a844bf7d6b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"330f6563-91e3-445d-b9d5-30a844bf7d6b","type":"BasicTickFormatter"},"plot":{"id":"bd57b6ea-6fd6-4fac-8659-19b426b422c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"a85665d4-dc60-484a-b99c-29f926e58d6a","type":"BasicTicker"}},"id":"e94bbf85-8736-4ae0-94cb-d3cd83401b3c","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9376b18a-47d4-42fa-97e1-50f7ebcf8b3b","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"52de2083-732d-43b3-b8d0-941fe6a20c63","type":"Oval"},{"attributes":{"plot":{"id":"bd57b6ea-6fd6-4fac-8659-19b426b422c1","subtype":"Figure","type":"Plot"}},"id":"a366327a-6ed0-449f-9aa1-2c8c50a51794","type":"SaveTool"},{"attributes":{"plot":{"id":"bd57b6ea-6fd6-4fac-8659-19b426b422c1","subtype":"Figure","type":"Plot"}},"id":"2c69e112-1460-4e70-bfa7-98adbd58081b","type":"HelpTool"},{"attributes":{"callback":null},"id":"25b79e86-48de-490c-bfbf-bfd413ccf838","type":"DataRange1d"},{"attributes":{},"id":"a85665d4-dc60-484a-b99c-29f926e58d6a","type":"BasicTicker"}],"root_ids":["bd57b6ea-6fd6-4fac-8659-19b426b422c1"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"6056d5f4-6979-45c3-8cb2-240f56bf1ac5","elementid":"24fb9b43-18a0-4ee1-a2a9-908d96967023","modelid":"bd57b6ea-6fd6-4fac-8659-19b426b422c1"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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