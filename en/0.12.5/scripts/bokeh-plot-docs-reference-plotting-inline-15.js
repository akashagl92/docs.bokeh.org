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
      };var element = document.getElementById("30594819-3dcb-4541-98a8-243327fa55a3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '30594819-3dcb-4541-98a8-243327fa55a3' but no matching script tag was found. ")
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
                var docs_json = {"afcaac9d-f79b-4c68-90a0-e234c78db69a":{"roots":{"references":[{"attributes":{"overlay":{"id":"b259e233-3bf2-4e5d-bbdb-0c0507c26544","type":"BoxAnnotation"},"plot":{"id":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf","subtype":"Figure","type":"Plot"}},"id":"ee744459-8a92-4993-a910-4b4c98720618","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"04f54cb6-1712-4d82-88dd-393abe19c5b1","type":"DataRange1d"},{"attributes":{"data_source":{"id":"4fb68039-c1b4-4125-adfe-34cafd637127","type":"ColumnDataSource"},"glyph":{"id":"4799eebe-fa45-4cab-8ac0-a4cc0bcbb4bd","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a829fc69-9e1d-4cca-b9fa-2d043d2416cc","type":"Patches"},"selection_glyph":null},"id":"0d6662b1-1706-4613-9d7b-f5bbeeaec5a4","type":"GlyphRenderer"},{"attributes":{},"id":"b1ca6dc1-af14-430e-b191-84973e6770a3","type":"BasicTicker"},{"attributes":{},"id":"63545c48-5089-429c-9796-da2127dcc2a4","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b259e233-3bf2-4e5d-bbdb-0c0507c26544","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d42eb35-b756-4ff5-bb6d-90d85474c842","type":"BasicTicker"}},"id":"743db954-771c-455c-9c7d-13feb0ed7efc","type":"Grid"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color","line_color"],"data":{"fill_color":["#43a2ca","#a8ddb5"],"line_color":["#43a2ca","#a8ddb5"],"xs":[[1,2,3],[4,5,6,5]],"ys":[[1,2,1],[4,5,5,4]]}},"id":"4fb68039-c1b4-4125-adfe-34cafd637127","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf","subtype":"Figure","type":"Plot"}},"id":"48def912-196e-4fae-9be2-9e93d8d799e5","type":"HelpTool"},{"attributes":{},"id":"9f8ca0cc-8d4e-48d7-86a4-3328ca41d65b","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf","subtype":"Figure","type":"Plot"}},"id":"d99484d5-fcb4-467b-ae5a-d4da3546738f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf","subtype":"Figure","type":"Plot"}},"id":"5feb68e8-8519-4ec4-b2ae-941d4cba7c67","type":"PanTool"},{"attributes":{"below":[{"id":"ab1e25fb-3366-477c-bab7-aec42586d4b5","type":"LinearAxis"}],"left":[{"id":"17f7c7d2-fd51-48f6-99b3-6426bf54ba03","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"ab1e25fb-3366-477c-bab7-aec42586d4b5","type":"LinearAxis"},{"id":"743db954-771c-455c-9c7d-13feb0ed7efc","type":"Grid"},{"id":"17f7c7d2-fd51-48f6-99b3-6426bf54ba03","type":"LinearAxis"},{"id":"7fe4a6ec-b18b-4a18-8166-41d86f67579f","type":"Grid"},{"id":"b259e233-3bf2-4e5d-bbdb-0c0507c26544","type":"BoxAnnotation"},{"id":"0d6662b1-1706-4613-9d7b-f5bbeeaec5a4","type":"GlyphRenderer"}],"title":{"id":"21b34b71-88b1-430a-b73c-27521772370d","type":"Title"},"tool_events":{"id":"63545c48-5089-429c-9796-da2127dcc2a4","type":"ToolEvents"},"toolbar":{"id":"4380f66e-0d99-44d7-b8a6-329e5ecaffa0","type":"Toolbar"},"x_range":{"id":"17970693-05be-42aa-80e3-d9b2a1a0f0b1","type":"DataRange1d"},"y_range":{"id":"04f54cb6-1712-4d82-88dd-393abe19c5b1","type":"DataRange1d"}},"id":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"9f8ca0cc-8d4e-48d7-86a4-3328ca41d65b","type":"BasicTickFormatter"},"plot":{"id":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1ca6dc1-af14-430e-b191-84973e6770a3","type":"BasicTicker"}},"id":"17f7c7d2-fd51-48f6-99b3-6426bf54ba03","type":"LinearAxis"},{"attributes":{},"id":"3d42eb35-b756-4ff5-bb6d-90d85474c842","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1ca6dc1-af14-430e-b191-84973e6770a3","type":"BasicTicker"}},"id":"7fe4a6ec-b18b-4a18-8166-41d86f67579f","type":"Grid"},{"attributes":{"plot":{"id":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf","subtype":"Figure","type":"Plot"}},"id":"6d6d7036-011d-425b-b944-52a24c3901bd","type":"ResetTool"},{"attributes":{"callback":null},"id":"17970693-05be-42aa-80e3-d9b2a1a0f0b1","type":"DataRange1d"},{"attributes":{},"id":"248e7074-1978-44b7-87f0-25641a7b1f54","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf","subtype":"Figure","type":"Plot"}},"id":"a64e7f5c-9acb-48db-8431-4b71eeb28d19","type":"SaveTool"},{"attributes":{"formatter":{"id":"248e7074-1978-44b7-87f0-25641a7b1f54","type":"BasicTickFormatter"},"plot":{"id":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d42eb35-b756-4ff5-bb6d-90d85474c842","type":"BasicTicker"}},"id":"ab1e25fb-3366-477c-bab7-aec42586d4b5","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"a829fc69-9e1d-4cca-b9fa-2d043d2416cc","type":"Patches"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"5feb68e8-8519-4ec4-b2ae-941d4cba7c67","type":"PanTool"},{"id":"d99484d5-fcb4-467b-ae5a-d4da3546738f","type":"WheelZoomTool"},{"id":"ee744459-8a92-4993-a910-4b4c98720618","type":"BoxZoomTool"},{"id":"a64e7f5c-9acb-48db-8431-4b71eeb28d19","type":"SaveTool"},{"id":"6d6d7036-011d-425b-b944-52a24c3901bd","type":"ResetTool"},{"id":"48def912-196e-4fae-9be2-9e93d8d799e5","type":"HelpTool"}]},"id":"4380f66e-0d99-44d7-b8a6-329e5ecaffa0","type":"Toolbar"},{"attributes":{"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"4799eebe-fa45-4cab-8ac0-a4cc0bcbb4bd","type":"Patches"},{"attributes":{"plot":null,"text":""},"id":"21b34b71-88b1-430a-b73c-27521772370d","type":"Title"}],"root_ids":["5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"afcaac9d-f79b-4c68-90a0-e234c78db69a","elementid":"30594819-3dcb-4541-98a8-243327fa55a3","modelid":"5fc2f61a-0dda-409a-b8a4-257dd0a6d0bf"}];
                
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
