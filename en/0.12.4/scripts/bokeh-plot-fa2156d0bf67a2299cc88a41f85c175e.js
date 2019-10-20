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
      };var element = document.getElementById("aa0fc113-9ff1-4092-a7ea-f69af1d9f31b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aa0fc113-9ff1-4092-a7ea-f69af1d9f31b' but no matching script tag was found. ")
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
                var docs_json = {"598fdfe5-8d28-4a9a-8edf-c9f904d44444":{"roots":{"references":[{"attributes":{},"id":"d7da3a1a-a1b2-4e56-99c4-185cdba9586f","type":"BasicTicker"},{"attributes":{"plot":{"id":"51a075fe-4dad-4301-9822-4f17b2115941","subtype":"Figure","type":"Plot"}},"id":"e1df08c6-6d75-44a4-be68-ba776927cbd2","type":"ResetTool"},{"attributes":{"plot":{"id":"51a075fe-4dad-4301-9822-4f17b2115941","subtype":"Figure","type":"Plot"}},"id":"9abf6008-d751-4fdf-a1a8-b86d1ef8937d","type":"SaveTool"},{"attributes":{"callback":null},"id":"e3b0c9b9-380c-4c4b-af1e-876d154fbee2","type":"DataRange1d"},{"attributes":{"overlay":{"id":"ffd40b9e-0551-4796-93f1-5d2d71c5f1ea","type":"BoxAnnotation"},"plot":{"id":"51a075fe-4dad-4301-9822-4f17b2115941","subtype":"Figure","type":"Plot"}},"id":"38337aad-b218-49c0-873d-ca58ac546c03","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"d226bccf-75da-41ff-95e4-5baa453aad39","type":"Circle"},{"attributes":{},"id":"085913e8-3732-45d3-bcc8-a0218e683bd1","type":"ToolEvents"},{"attributes":{"plot":null,"text":""},"id":"a45b39e8-8184-4f95-929a-0b65e1ed35a9","type":"Title"},{"attributes":{"formatter":{"id":"85a3ccb4-c46c-42a3-a284-7adb363c85ce","type":"BasicTickFormatter"},"plot":{"id":"51a075fe-4dad-4301-9822-4f17b2115941","subtype":"Figure","type":"Plot"},"ticker":{"id":"00ee9b26-a222-4899-bc5e-ffa0d43a3b73","type":"BasicTicker"}},"id":"3f6dce3d-03e4-4ca6-8eb1-98c487d84eee","type":"LinearAxis"},{"attributes":{"callback":null},"id":"1fb0284a-4f87-4896-93ec-864f19a8f5b4","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ffd40b9e-0551-4796-93f1-5d2d71c5f1ea","type":"BoxAnnotation"},{"attributes":{},"id":"85a3ccb4-c46c-42a3-a284-7adb363c85ce","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"51a075fe-4dad-4301-9822-4f17b2115941","subtype":"Figure","type":"Plot"}},"id":"ae52e31b-f7b0-459b-b4f0-c8020d1065d1","type":"HelpTool"},{"attributes":{"bounds":[2,4],"dimension":1,"plot":{"id":"51a075fe-4dad-4301-9822-4f17b2115941","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7da3a1a-a1b2-4e56-99c4-185cdba9586f","type":"BasicTicker"}},"id":"a9896e1c-6af9-4c46-9367-7f1ee0b68b21","type":"Grid"},{"attributes":{},"id":"00ee9b26-a222-4899-bc5e-ffa0d43a3b73","type":"BasicTicker"},{"attributes":{},"id":"73ae0a9f-01bf-46ff-92ac-ece4c99943f7","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"51a075fe-4dad-4301-9822-4f17b2115941","subtype":"Figure","type":"Plot"}},"id":"9a332fc9-5417-4869-a211-f8e31faf78f7","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"51a075fe-4dad-4301-9822-4f17b2115941","subtype":"Figure","type":"Plot"}},"id":"a9dc5e05-a78c-4240-99a2-a15e831777cd","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a9dc5e05-a78c-4240-99a2-a15e831777cd","type":"PanTool"},{"id":"9a332fc9-5417-4869-a211-f8e31faf78f7","type":"WheelZoomTool"},{"id":"38337aad-b218-49c0-873d-ca58ac546c03","type":"BoxZoomTool"},{"id":"9abf6008-d751-4fdf-a1a8-b86d1ef8937d","type":"SaveTool"},{"id":"e1df08c6-6d75-44a4-be68-ba776927cbd2","type":"ResetTool"},{"id":"ae52e31b-f7b0-459b-b4f0-c8020d1065d1","type":"HelpTool"}]},"id":"1afc569e-f3cd-483d-8459-6c4f40fb490d","type":"Toolbar"},{"attributes":{"formatter":{"id":"73ae0a9f-01bf-46ff-92ac-ece4c99943f7","type":"BasicTickFormatter"},"plot":{"id":"51a075fe-4dad-4301-9822-4f17b2115941","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7da3a1a-a1b2-4e56-99c4-185cdba9586f","type":"BasicTicker"}},"id":"f3f30dc3-e265-4d8f-98cb-23fbc72f45ae","type":"LinearAxis"},{"attributes":{"bounds":[2,4],"plot":{"id":"51a075fe-4dad-4301-9822-4f17b2115941","subtype":"Figure","type":"Plot"},"ticker":{"id":"00ee9b26-a222-4899-bc5e-ffa0d43a3b73","type":"BasicTicker"}},"id":"b396eb01-4427-4be0-82ba-af83d08f5374","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6f8ee755-e2cf-4b12-bbf6-ef7eca4ffd10","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"520bd2d0-c0db-477e-a70d-00fd631b52b3","type":"Circle"},{"attributes":{"data_source":{"id":"6f8ee755-e2cf-4b12-bbf6-ef7eca4ffd10","type":"ColumnDataSource"},"glyph":{"id":"d226bccf-75da-41ff-95e4-5baa453aad39","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"520bd2d0-c0db-477e-a70d-00fd631b52b3","type":"Circle"},"selection_glyph":null},"id":"3d67b3f3-5d29-4b94-81e0-fb134cc6c42c","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"3f6dce3d-03e4-4ca6-8eb1-98c487d84eee","type":"LinearAxis"}],"left":[{"id":"f3f30dc3-e265-4d8f-98cb-23fbc72f45ae","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3f6dce3d-03e4-4ca6-8eb1-98c487d84eee","type":"LinearAxis"},{"id":"b396eb01-4427-4be0-82ba-af83d08f5374","type":"Grid"},{"id":"f3f30dc3-e265-4d8f-98cb-23fbc72f45ae","type":"LinearAxis"},{"id":"a9896e1c-6af9-4c46-9367-7f1ee0b68b21","type":"Grid"},{"id":"ffd40b9e-0551-4796-93f1-5d2d71c5f1ea","type":"BoxAnnotation"},{"id":"3d67b3f3-5d29-4b94-81e0-fb134cc6c42c","type":"GlyphRenderer"}],"title":{"id":"a45b39e8-8184-4f95-929a-0b65e1ed35a9","type":"Title"},"tool_events":{"id":"085913e8-3732-45d3-bcc8-a0218e683bd1","type":"ToolEvents"},"toolbar":{"id":"1afc569e-f3cd-483d-8459-6c4f40fb490d","type":"Toolbar"},"x_range":{"id":"1fb0284a-4f87-4896-93ec-864f19a8f5b4","type":"DataRange1d"},"y_range":{"id":"e3b0c9b9-380c-4c4b-af1e-876d154fbee2","type":"DataRange1d"}},"id":"51a075fe-4dad-4301-9822-4f17b2115941","subtype":"Figure","type":"Plot"}],"root_ids":["51a075fe-4dad-4301-9822-4f17b2115941"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"598fdfe5-8d28-4a9a-8edf-c9f904d44444","elementid":"aa0fc113-9ff1-4092-a7ea-f69af1d9f31b","modelid":"51a075fe-4dad-4301-9822-4f17b2115941"}];
                
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
