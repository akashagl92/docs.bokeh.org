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
      };var element = document.getElementById("39786d3d-238d-4e48-ae38-9fb9c0dd5dfd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '39786d3d-238d-4e48-ae38-9fb9c0dd5dfd' but no matching script tag was found. ")
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
                  var docs_json = {"0245f33d-6ff6-405c-8626-966c24df3044":{"roots":{"references":[{"attributes":{"formatter":{"id":"f6017c26-0bea-4af5-a52f-d131d8228cae","type":"BasicTickFormatter"},"plot":{"id":"cb55d8d1-9450-4f46-b785-a2412edbf183","type":"Plot"},"ticker":{"id":"1813cc86-1140-4f5f-9673-4f413bbe0d6d","type":"BasicTicker"}},"id":"0bc6e967-b2be-4286-af10-d60f51235490","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"cb55d8d1-9450-4f46-b785-a2412edbf183","type":"Plot"},"ticker":{"id":"1813cc86-1140-4f5f-9673-4f413bbe0d6d","type":"BasicTicker"}},"id":"19945d5e-605f-4698-aeab-982e97637423","type":"Grid"},{"attributes":{"data_source":{"id":"02422e5e-0aa1-4823-9235-b01c1efae99f","type":"ColumnDataSource"},"glyph":{"id":"a6d692de-3314-4353-a4e1-ab145afcd427","type":"CircleCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5de6d0cf-891f-46da-a6e7-888267f3e8eb","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"1d9053a8-2b17-462e-83d3-0ea57b1cb269","type":"DataRange1d"},{"attributes":{"plot":{"id":"cb55d8d1-9450-4f46-b785-a2412edbf183","type":"Plot"},"ticker":{"id":"c6bc7ddf-b172-4f1b-a241-94228fdc4f13","type":"BasicTicker"}},"id":"57c21bc4-9fda-4a28-8162-fa18024d96c0","type":"Grid"},{"attributes":{},"id":"c6bc7ddf-b172-4f1b-a241-94228fdc4f13","type":"BasicTicker"},{"attributes":{},"id":"05e69dac-cae3-475f-b58e-aeda985e6485","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#fb8072"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a6d692de-3314-4353-a4e1-ab145afcd427","type":"CircleCross"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5a0f5c6c-4f81-4f5a-bf4a-d34d94c72967","type":"Toolbar"},{"attributes":{"callback":null},"id":"319d040f-25c3-4a3d-89a5-983d37d48b19","type":"DataRange1d"},{"attributes":{"formatter":{"id":"05e69dac-cae3-475f-b58e-aeda985e6485","type":"BasicTickFormatter"},"plot":{"id":"cb55d8d1-9450-4f46-b785-a2412edbf183","type":"Plot"},"ticker":{"id":"c6bc7ddf-b172-4f1b-a241-94228fdc4f13","type":"BasicTicker"}},"id":"d26cfcd6-1608-4fc7-838d-4baeb7817f57","type":"LinearAxis"},{"attributes":{},"id":"1813cc86-1140-4f5f-9673-4f413bbe0d6d","type":"BasicTicker"},{"attributes":{},"id":"f6017c26-0bea-4af5-a52f-d131d8228cae","type":"BasicTickFormatter"},{"attributes":{},"id":"550162cb-fe07-4336-9594-ec61807a0a12","type":"ToolEvents"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"02422e5e-0aa1-4823-9235-b01c1efae99f","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"d26cfcd6-1608-4fc7-838d-4baeb7817f57","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"0bc6e967-b2be-4286-af10-d60f51235490","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"5de6d0cf-891f-46da-a6e7-888267f3e8eb","type":"GlyphRenderer"},{"id":"d26cfcd6-1608-4fc7-838d-4baeb7817f57","type":"LinearAxis"},{"id":"0bc6e967-b2be-4286-af10-d60f51235490","type":"LinearAxis"},{"id":"57c21bc4-9fda-4a28-8162-fa18024d96c0","type":"Grid"},{"id":"19945d5e-605f-4698-aeab-982e97637423","type":"Grid"}],"title":null,"tool_events":{"id":"550162cb-fe07-4336-9594-ec61807a0a12","type":"ToolEvents"},"toolbar":{"id":"5a0f5c6c-4f81-4f5a-bf4a-d34d94c72967","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"319d040f-25c3-4a3d-89a5-983d37d48b19","type":"DataRange1d"},"y_range":{"id":"1d9053a8-2b17-462e-83d3-0ea57b1cb269","type":"DataRange1d"}},"id":"cb55d8d1-9450-4f46-b785-a2412edbf183","type":"Plot"}],"root_ids":["cb55d8d1-9450-4f46-b785-a2412edbf183"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"0245f33d-6ff6-405c-8626-966c24df3044","elementid":"39786d3d-238d-4e48-ae38-9fb9c0dd5dfd","modelid":"cb55d8d1-9450-4f46-b785-a2412edbf183"}];
                  
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