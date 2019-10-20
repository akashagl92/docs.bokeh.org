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
      };var element = document.getElementById("208a184b-7257-4fc3-a1cc-a3f78871b3d5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '208a184b-7257-4fc3-a1cc-a3f78871b3d5' but no matching script tag was found. ")
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
                var docs_json = {"02fcd623-cfd5-47a1-8958-c29e4c7aed67":{"roots":{"references":[{"attributes":{},"id":"9862b998-4b72-4ffa-acd4-cc9760fcabeb","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"684725ad-ecb2-41f9-a5ab-1388f3c14afb","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d3c6987a-24fc-4bb8-8092-8b55b43a6125","type":"Toolbar"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"f713635e-7736-42e8-a484-e65fe1ab2a75","type":"Ellipse"},{"attributes":{},"id":"a14e7301-0cb5-4fa9-ae5e-4f2e09286744","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["h","x","w","y"],"data":{"h":{"__ndarray__":"AAAAAAAA4D9mZmZmZmbaP2ZmZmZmZtY/AAAAAAAA1D8zMzMzMzPTPwAAAAAAANQ/ZmZmZmZm1j9mZmZmZmbaPwAAAAAAAOA/","dtype":"float64","shape":[9]},"w":{"__ndarray__":"VVVVVVVVxT+ZmZmZmZnJP97d3d3d3c0/ERERERER0T8zMzMzMzPTP1VVVVVVVdU/d3d3d3d31z+amZmZmZnZP7y7u7u7u9s/","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"49057baa-d5e9-4d48-a2d8-e008b72cbc02","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"2cb86b73-6698-4280-887f-127160544041","type":"BasicTickFormatter"},"plot":{"id":"6461223b-817a-43f7-bb98-2607b71d7d45","type":"Plot"},"ticker":{"id":"a14e7301-0cb5-4fa9-ae5e-4f2e09286744","type":"BasicTicker"}},"id":"4e99027a-8b53-4ea9-a49b-410bbd93e217","type":"LinearAxis"},{"attributes":{"data_source":{"id":"49057baa-d5e9-4d48-a2d8-e008b72cbc02","type":"ColumnDataSource"},"glyph":{"id":"f713635e-7736-42e8-a484-e65fe1ab2a75","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a2d32eaf-4f4f-4c8b-855c-7a18e82166e4","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"e559d28b-7a94-4b34-85b5-21ff8ef494ba","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4e99027a-8b53-4ea9-a49b-410bbd93e217","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a2d32eaf-4f4f-4c8b-855c-7a18e82166e4","type":"GlyphRenderer"},{"id":"e559d28b-7a94-4b34-85b5-21ff8ef494ba","type":"LinearAxis"},{"id":"4e99027a-8b53-4ea9-a49b-410bbd93e217","type":"LinearAxis"},{"id":"dc742064-c230-4f13-806d-c7057b0273ae","type":"Grid"},{"id":"080f671d-e760-4156-8d47-c6c909a4adc0","type":"Grid"}],"title":null,"tool_events":{"id":"8fd3dc80-3675-4b11-86f5-d278b2164e75","type":"ToolEvents"},"toolbar":{"id":"d3c6987a-24fc-4bb8-8092-8b55b43a6125","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"684725ad-ecb2-41f9-a5ab-1388f3c14afb","type":"DataRange1d"},"y_range":{"id":"9556f955-fd2e-4e61-adba-1786a6eda428","type":"DataRange1d"}},"id":"6461223b-817a-43f7-bb98-2607b71d7d45","type":"Plot"},{"attributes":{},"id":"8fd3dc80-3675-4b11-86f5-d278b2164e75","type":"ToolEvents"},{"attributes":{"callback":null},"id":"9556f955-fd2e-4e61-adba-1786a6eda428","type":"DataRange1d"},{"attributes":{},"id":"2cb86b73-6698-4280-887f-127160544041","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"6461223b-817a-43f7-bb98-2607b71d7d45","type":"Plot"},"ticker":{"id":"a14e7301-0cb5-4fa9-ae5e-4f2e09286744","type":"BasicTicker"}},"id":"080f671d-e760-4156-8d47-c6c909a4adc0","type":"Grid"},{"attributes":{"formatter":{"id":"9862b998-4b72-4ffa-acd4-cc9760fcabeb","type":"BasicTickFormatter"},"plot":{"id":"6461223b-817a-43f7-bb98-2607b71d7d45","type":"Plot"},"ticker":{"id":"10f981a4-01f5-4c39-ba72-cccb13727a8f","type":"BasicTicker"}},"id":"e559d28b-7a94-4b34-85b5-21ff8ef494ba","type":"LinearAxis"},{"attributes":{},"id":"10f981a4-01f5-4c39-ba72-cccb13727a8f","type":"BasicTicker"},{"attributes":{"plot":{"id":"6461223b-817a-43f7-bb98-2607b71d7d45","type":"Plot"},"ticker":{"id":"10f981a4-01f5-4c39-ba72-cccb13727a8f","type":"BasicTicker"}},"id":"dc742064-c230-4f13-806d-c7057b0273ae","type":"Grid"}],"root_ids":["6461223b-817a-43f7-bb98-2607b71d7d45"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"02fcd623-cfd5-47a1-8958-c29e4c7aed67","elementid":"208a184b-7257-4fc3-a1cc-a3f78871b3d5","modelid":"6461223b-817a-43f7-bb98-2607b71d7d45"}];
                
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
