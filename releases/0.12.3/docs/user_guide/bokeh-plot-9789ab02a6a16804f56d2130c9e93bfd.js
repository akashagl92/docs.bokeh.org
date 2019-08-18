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
      };var element = document.getElementById("43d54436-a467-4b8e-afd0-a568d358b37b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '43d54436-a467-4b8e-afd0-a568d358b37b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"49aae068-3622-40f4-8af2-7803d76065af":{"roots":{"references":[{"attributes":{"formatter":{"id":"e2b6e2c6-5a92-4475-b9a1-ff025c64f5b4","type":"BasicTickFormatter"},"plot":{"id":"079b8839-ea40-43a8-9924-9c44a837fa6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac6bd511-dd4f-43cc-a4d5-54f5043b42ab","type":"BasicTicker"}},"id":"5b713a0c-0542-47be-812d-89cf18c4170d","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d2810e9a-eb85-4479-8aff-307f0198beb9","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"079b8839-ea40-43a8-9924-9c44a837fa6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"28e93a7c-9a44-429e-94c1-db1fce86fbc7","type":"BasicTicker"}},"id":"b91f0113-fcfc-4d79-be13-590686dd14fa","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d400143e-d8f4-425e-8ed5-06966e1f333b","type":"PanTool"},{"id":"af186df4-23d5-48ce-8e5d-2e8e284c6367","type":"WheelZoomTool"},{"id":"85393733-6e2b-4d4f-b914-bef4e229bd4d","type":"BoxZoomTool"},{"id":"553b1eed-261d-4a28-9456-1d15dd16c157","type":"SaveTool"},{"id":"876c2e47-5a85-4c96-ba17-1a35014f2da6","type":"ResetTool"},{"id":"c3c68247-9435-4309-917b-9bd86d0a2ff6","type":"HelpTool"}]},"id":"85ba1788-3b2e-478c-bf96-08bdf32de716","type":"Toolbar"},{"attributes":{"plot":{"id":"079b8839-ea40-43a8-9924-9c44a837fa6a","subtype":"Figure","type":"Plot"}},"id":"553b1eed-261d-4a28-9456-1d15dd16c157","type":"SaveTool"},{"attributes":{},"id":"ac6bd511-dd4f-43cc-a4d5-54f5043b42ab","type":"BasicTicker"},{"attributes":{"below":[{"id":"5b713a0c-0542-47be-812d-89cf18c4170d","type":"LinearAxis"}],"left":[{"id":"313e6057-6d2f-4d59-a04b-bf7b8122ca68","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"5b713a0c-0542-47be-812d-89cf18c4170d","type":"LinearAxis"},{"id":"d0ea9f7f-85c6-42c2-a8b2-001ba5af0d8e","type":"Grid"},{"id":"313e6057-6d2f-4d59-a04b-bf7b8122ca68","type":"LinearAxis"},{"id":"b91f0113-fcfc-4d79-be13-590686dd14fa","type":"Grid"},{"id":"d2810e9a-eb85-4479-8aff-307f0198beb9","type":"BoxAnnotation"},{"id":"b16aaeef-00b3-4efd-b159-afee8a30caec","type":"GlyphRenderer"}],"title":{"id":"3ec7b9f3-5d42-4f39-9a1f-70e62697a958","type":"Title"},"tool_events":{"id":"837134ba-ea25-4ab9-838c-5eea761d9f30","type":"ToolEvents"},"toolbar":{"id":"85ba1788-3b2e-478c-bf96-08bdf32de716","type":"Toolbar"},"toolbar_location":"above","x_range":{"id":"5bb67682-8e85-4c69-ab93-ffefbdb5dfb8","type":"DataRange1d"},"y_range":{"id":"aea55ea9-b6b6-4ed8-be6f-44e777f17614","type":"DataRange1d"}},"id":"079b8839-ea40-43a8-9924-9c44a837fa6a","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"079b8839-ea40-43a8-9924-9c44a837fa6a","subtype":"Figure","type":"Plot"}},"id":"d400143e-d8f4-425e-8ed5-06966e1f333b","type":"PanTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d0a77db0-4d1f-4a62-b7cb-5fa492b0b17e","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"70ef0100-9332-4357-b8ee-35501554bf66","type":"Circle"},{"attributes":{"plot":{"id":"079b8839-ea40-43a8-9924-9c44a837fa6a","subtype":"Figure","type":"Plot"}},"id":"c3c68247-9435-4309-917b-9bd86d0a2ff6","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"6c83fd8e-1daf-4154-a7fd-7fe8d8153cb7","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"d2810e9a-eb85-4479-8aff-307f0198beb9","type":"BoxAnnotation"},"plot":{"id":"079b8839-ea40-43a8-9924-9c44a837fa6a","subtype":"Figure","type":"Plot"}},"id":"85393733-6e2b-4d4f-b914-bef4e229bd4d","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"2f4ce86a-eea7-44f6-b205-c3aeb1460c9a","type":"BasicTickFormatter"},"plot":{"id":"079b8839-ea40-43a8-9924-9c44a837fa6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"28e93a7c-9a44-429e-94c1-db1fce86fbc7","type":"BasicTicker"}},"id":"313e6057-6d2f-4d59-a04b-bf7b8122ca68","type":"LinearAxis"},{"attributes":{},"id":"e2b6e2c6-5a92-4475-b9a1-ff025c64f5b4","type":"BasicTickFormatter"},{"attributes":{},"id":"28e93a7c-9a44-429e-94c1-db1fce86fbc7","type":"BasicTicker"},{"attributes":{"plot":{"id":"079b8839-ea40-43a8-9924-9c44a837fa6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ac6bd511-dd4f-43cc-a4d5-54f5043b42ab","type":"BasicTicker"}},"id":"d0ea9f7f-85c6-42c2-a8b2-001ba5af0d8e","type":"Grid"},{"attributes":{"data_source":{"id":"6c83fd8e-1daf-4154-a7fd-7fe8d8153cb7","type":"ColumnDataSource"},"glyph":{"id":"d0a77db0-4d1f-4a62-b7cb-5fa492b0b17e","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"70ef0100-9332-4357-b8ee-35501554bf66","type":"Circle"},"selection_glyph":null},"id":"b16aaeef-00b3-4efd-b159-afee8a30caec","type":"GlyphRenderer"},{"attributes":{},"id":"2f4ce86a-eea7-44f6-b205-c3aeb1460c9a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"aea55ea9-b6b6-4ed8-be6f-44e777f17614","type":"DataRange1d"},{"attributes":{},"id":"837134ba-ea25-4ab9-838c-5eea761d9f30","type":"ToolEvents"},{"attributes":{"callback":null},"id":"5bb67682-8e85-4c69-ab93-ffefbdb5dfb8","type":"DataRange1d"},{"attributes":{"plot":{"id":"079b8839-ea40-43a8-9924-9c44a837fa6a","subtype":"Figure","type":"Plot"}},"id":"876c2e47-5a85-4c96-ba17-1a35014f2da6","type":"ResetTool"},{"attributes":{"plot":{"id":"079b8839-ea40-43a8-9924-9c44a837fa6a","subtype":"Figure","type":"Plot"}},"id":"af186df4-23d5-48ce-8e5d-2e8e284c6367","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":"Top Title with Toolbar"},"id":"3ec7b9f3-5d42-4f39-9a1f-70e62697a958","type":"Title"}],"root_ids":["079b8839-ea40-43a8-9924-9c44a837fa6a"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"49aae068-3622-40f4-8af2-7803d76065af","elementid":"43d54436-a467-4b8e-afd0-a568d358b37b","modelid":"079b8839-ea40-43a8-9924-9c44a837fa6a"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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