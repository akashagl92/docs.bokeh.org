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
      };var element = document.getElementById("3891a70f-5296-4a58-bada-c9a83bc036f7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3891a70f-5296-4a58-bada-c9a83bc036f7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f42e9704-891f-43bb-85a6-0eee6b3b0f06":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"6bd7bf27-33e7-4190-99dc-a2a511fa7c23","type":"Toolbar"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#3288Bd"},"line_width":{"value":3},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"28219f95-dd11-4bce-980f-4a3481effa72","type":"Circle"},{"attributes":{"formatter":{"id":"541f66b2-7728-4e35-bb1e-25dc3e9b9938","type":"BasicTickFormatter"},"plot":{"id":"429c394b-7b69-426b-96e2-693aa44ac405","type":"Plot"},"ticker":{"id":"ca8d4e84-73e4-4433-b849-9886c188d2f3","type":"BasicTicker"}},"id":"c0e1a35b-d601-4d26-9d9a-42d49aeb5743","type":"LinearAxis"},{"attributes":{"formatter":{"id":"a40ee2a5-cb8d-4f2c-b868-a70328cbfd16","type":"BasicTickFormatter"},"plot":{"id":"429c394b-7b69-426b-96e2-693aa44ac405","type":"Plot"},"ticker":{"id":"aac8eb00-071a-4065-80e7-1b8b627020e2","type":"BasicTicker"}},"id":"d30b313b-09c7-4131-97df-f5e79c20c713","type":"LinearAxis"},{"attributes":{"plot":{"id":"429c394b-7b69-426b-96e2-693aa44ac405","type":"Plot"},"ticker":{"id":"ca8d4e84-73e4-4433-b849-9886c188d2f3","type":"BasicTicker"}},"id":"859b39ae-9b0a-4de6-9d96-0abb52c3bdc6","type":"Grid"},{"attributes":{},"id":"3702192c-94c9-4334-adf9-9369516c6785","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"429c394b-7b69-426b-96e2-693aa44ac405","type":"Plot"},"ticker":{"id":"aac8eb00-071a-4065-80e7-1b8b627020e2","type":"BasicTicker"}},"id":"8d0879cb-64b4-42f8-b1d6-2005ffe7e571","type":"Grid"},{"attributes":{},"id":"a40ee2a5-cb8d-4f2c-b868-a70328cbfd16","type":"BasicTickFormatter"},{"attributes":{},"id":"541f66b2-7728-4e35-bb1e-25dc3e9b9938","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"0cf7027d-4591-4640-8980-29a5516cb333","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"c0e1a35b-d601-4d26-9d9a-42d49aeb5743","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d30b313b-09c7-4131-97df-f5e79c20c713","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"502cb636-bb36-4cd2-badd-28ea1a7a47f5","type":"GlyphRenderer"},{"id":"c0e1a35b-d601-4d26-9d9a-42d49aeb5743","type":"LinearAxis"},{"id":"d30b313b-09c7-4131-97df-f5e79c20c713","type":"LinearAxis"},{"id":"859b39ae-9b0a-4de6-9d96-0abb52c3bdc6","type":"Grid"},{"id":"8d0879cb-64b4-42f8-b1d6-2005ffe7e571","type":"Grid"}],"title":null,"tool_events":{"id":"3702192c-94c9-4334-adf9-9369516c6785","type":"ToolEvents"},"toolbar":{"id":"6bd7bf27-33e7-4190-99dc-a2a511fa7c23","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c9b91206-6cc1-43ca-8267-dc08c4ab7b59","type":"DataRange1d"},"y_range":{"id":"4cdc1bea-15bd-4d48-9e4d-559a2db8c757","type":"DataRange1d"}},"id":"429c394b-7b69-426b-96e2-693aa44ac405","type":"Plot"},{"attributes":{"callback":null},"id":"c9b91206-6cc1-43ca-8267-dc08c4ab7b59","type":"DataRange1d"},{"attributes":{"data_source":{"id":"0cf7027d-4591-4640-8980-29a5516cb333","type":"ColumnDataSource"},"glyph":{"id":"28219f95-dd11-4bce-980f-4a3481effa72","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"502cb636-bb36-4cd2-badd-28ea1a7a47f5","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"4cdc1bea-15bd-4d48-9e4d-559a2db8c757","type":"DataRange1d"},{"attributes":{},"id":"ca8d4e84-73e4-4433-b849-9886c188d2f3","type":"BasicTicker"},{"attributes":{},"id":"aac8eb00-071a-4065-80e7-1b8b627020e2","type":"BasicTicker"}],"root_ids":["429c394b-7b69-426b-96e2-693aa44ac405"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"f42e9704-891f-43bb-85a6-0eee6b3b0f06","elementid":"3891a70f-5296-4a58-bada-c9a83bc036f7","modelid":"429c394b-7b69-426b-96e2-693aa44ac405"}];
              
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