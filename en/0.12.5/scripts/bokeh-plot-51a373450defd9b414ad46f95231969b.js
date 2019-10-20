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
      };var element = document.getElementById("1a68103a-8a6c-4701-9e16-4a99ef405bf0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1a68103a-8a6c-4701-9e16-4a99ef405bf0' but no matching script tag was found. ")
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
                var docs_json = {"11eea412-927b-46ef-a21f-83206db45dea":{"roots":{"references":[{"attributes":{},"id":"c7793876-133e-4b22-a907-66b8d6b858dc","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"6147e25c-f5c4-421c-9944-30b1498bf615","type":"PanTool"},{"id":"aae7729e-92c3-4d2b-9ac7-4405fa22452f","type":"WheelZoomTool"},{"id":"0776dee7-519d-4c16-8de2-26f5bd6ff6ee","type":"BoxZoomTool"},{"id":"42117cf3-aaab-40eb-870b-d5846f886cc3","type":"SaveTool"},{"id":"b4df0f7e-71eb-46bf-af59-0de55e07362e","type":"ResetTool"},{"id":"0cb7e2db-8ef5-43bc-a30f-69cdc10a3189","type":"HelpTool"}]},"id":"d185cbcf-e9c4-447a-9050-b47bc4fceba7","type":"Toolbar"},{"attributes":{},"id":"34d29beb-0ebb-4c94-8980-70428482afdc","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"f83638d9-40fd-447c-8a4d-e05da1318e3c","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c73497b-ca37-4518-9237-2f5a76575bd6","type":"BasicTicker"}},"id":"fbc2f012-2ede-4304-bc89-ae2d07f3df6b","type":"Grid"},{"attributes":{},"id":"839c472b-1562-4cd5-9cf2-d66a316d2c01","type":"BasicTicker"},{"attributes":{"plot":{"id":"f83638d9-40fd-447c-8a4d-e05da1318e3c","subtype":"Figure","type":"Plot"}},"id":"b4df0f7e-71eb-46bf-af59-0de55e07362e","type":"ResetTool"},{"attributes":{},"id":"303f514b-6ab2-4fab-8b6c-acf7a7f42f5b","type":"BasicTickFormatter"},{"attributes":{},"id":"5c73497b-ca37-4518-9237-2f5a76575bd6","type":"BasicTicker"},{"attributes":{"formatter":{"id":"34d29beb-0ebb-4c94-8980-70428482afdc","type":"BasicTickFormatter"},"plot":{"id":"f83638d9-40fd-447c-8a4d-e05da1318e3c","subtype":"Figure","type":"Plot"},"ticker":{"id":"839c472b-1562-4cd5-9cf2-d66a316d2c01","type":"BasicTicker"}},"id":"271132dc-58ba-4c1f-ba7d-c8ac9607f380","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a56dbd81-5329-41a5-9353-7ee832d7e7a7","type":"ColumnDataSource"},"glyph":{"id":"ab60cce4-733b-4722-86b7-6eaea5164dea","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"da778e03-34f2-40c2-8333-1193ce03be4c","type":"Ellipse"},"selection_glyph":null},"id":"015031c4-2781-4cdf-947f-a999ebd581e6","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"512d252a-72df-473f-9d42-ef0249159f82","type":"DataRange1d"},{"attributes":{"plot":{"id":"f83638d9-40fd-447c-8a4d-e05da1318e3c","subtype":"Figure","type":"Plot"}},"id":"42117cf3-aaab-40eb-870b-d5846f886cc3","type":"SaveTool"},{"attributes":{"below":[{"id":"271132dc-58ba-4c1f-ba7d-c8ac9607f380","type":"LinearAxis"}],"left":[{"id":"eceaa095-522b-4ec5-83ef-541ff981be76","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"271132dc-58ba-4c1f-ba7d-c8ac9607f380","type":"LinearAxis"},{"id":"3a3730a4-2ca0-48c3-a5fd-8d7b2a6b87f4","type":"Grid"},{"id":"eceaa095-522b-4ec5-83ef-541ff981be76","type":"LinearAxis"},{"id":"fbc2f012-2ede-4304-bc89-ae2d07f3df6b","type":"Grid"},{"id":"541ea567-bc15-484c-8823-7b4ed6ce0b5f","type":"BoxAnnotation"},{"id":"015031c4-2781-4cdf-947f-a999ebd581e6","type":"GlyphRenderer"}],"title":{"id":"fe111e72-6ce4-4beb-9d54-6c31ace325b3","type":"Title"},"tool_events":{"id":"c7793876-133e-4b22-a907-66b8d6b858dc","type":"ToolEvents"},"toolbar":{"id":"d185cbcf-e9c4-447a-9050-b47bc4fceba7","type":"Toolbar"},"x_range":{"id":"512d252a-72df-473f-9d42-ef0249159f82","type":"DataRange1d"},"y_range":{"id":"c73297d6-a580-4857-b07d-ffe9e05ba5e0","type":"DataRange1d"}},"id":"f83638d9-40fd-447c-8a4d-e05da1318e3c","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":""},"id":"fe111e72-6ce4-4beb-9d54-6c31ace325b3","type":"Title"},{"attributes":{"plot":{"id":"f83638d9-40fd-447c-8a4d-e05da1318e3c","subtype":"Figure","type":"Plot"}},"id":"0cb7e2db-8ef5-43bc-a30f-69cdc10a3189","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["width","x","y"],"data":{"width":[0.2,0.3,0.1],"x":[1,2,3],"y":[1,2,3]}},"id":"a56dbd81-5329-41a5-9353-7ee832d7e7a7","type":"ColumnDataSource"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.3},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"da778e03-34f2-40c2-8333-1193ce03be4c","type":"Ellipse"},{"attributes":{"angle":{"units":"rad","value":1.0471975511965976},"fill_color":{"value":"#CAB2D6"},"height":{"units":"data","value":0.3},"line_color":{"value":"#CAB2D6"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab60cce4-733b-4722-86b7-6eaea5164dea","type":"Ellipse"},{"attributes":{"overlay":{"id":"541ea567-bc15-484c-8823-7b4ed6ce0b5f","type":"BoxAnnotation"},"plot":{"id":"f83638d9-40fd-447c-8a4d-e05da1318e3c","subtype":"Figure","type":"Plot"}},"id":"0776dee7-519d-4c16-8de2-26f5bd6ff6ee","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"f83638d9-40fd-447c-8a4d-e05da1318e3c","subtype":"Figure","type":"Plot"}},"id":"aae7729e-92c3-4d2b-9ac7-4405fa22452f","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"541ea567-bc15-484c-8823-7b4ed6ce0b5f","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"c73297d6-a580-4857-b07d-ffe9e05ba5e0","type":"DataRange1d"},{"attributes":{"formatter":{"id":"303f514b-6ab2-4fab-8b6c-acf7a7f42f5b","type":"BasicTickFormatter"},"plot":{"id":"f83638d9-40fd-447c-8a4d-e05da1318e3c","subtype":"Figure","type":"Plot"},"ticker":{"id":"5c73497b-ca37-4518-9237-2f5a76575bd6","type":"BasicTicker"}},"id":"eceaa095-522b-4ec5-83ef-541ff981be76","type":"LinearAxis"},{"attributes":{"plot":{"id":"f83638d9-40fd-447c-8a4d-e05da1318e3c","subtype":"Figure","type":"Plot"},"ticker":{"id":"839c472b-1562-4cd5-9cf2-d66a316d2c01","type":"BasicTicker"}},"id":"3a3730a4-2ca0-48c3-a5fd-8d7b2a6b87f4","type":"Grid"},{"attributes":{"plot":{"id":"f83638d9-40fd-447c-8a4d-e05da1318e3c","subtype":"Figure","type":"Plot"}},"id":"6147e25c-f5c4-421c-9944-30b1498bf615","type":"PanTool"}],"root_ids":["f83638d9-40fd-447c-8a4d-e05da1318e3c"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"11eea412-927b-46ef-a21f-83206db45dea","elementid":"1a68103a-8a6c-4701-9e16-4a99ef405bf0","modelid":"f83638d9-40fd-447c-8a4d-e05da1318e3c"}];
                
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
