document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("3b40f504-ada4-447c-af01-43922a64f1f8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3b40f504-ada4-447c-af01-43922a64f1f8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"081f5873-51fd-49b4-9018-97cf1aceac4c":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"b71df7fc-a4d8-44ef-b873-90dd3800fe20","type":"Plot"},"ticker":{"id":"144ff0f9-d0cb-45c6-8270-15b58ccdfca6","type":"BasicTicker"}},"id":"b89323de-602e-46de-b584-99342d0e73e6","type":"Grid"},{"attributes":{},"id":"908ae637-6cd5-42ab-b3f0-3d0e8d45ce63","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"aa281c68-7d18-4bdc-b34f-55dd5ead8569","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"f9fb2168-26fa-4162-840a-c854968b3e10","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"908ae637-6cd5-42ab-b3f0-3d0e8d45ce63","type":"BasicTickFormatter"},"plot":{"id":"b71df7fc-a4d8-44ef-b873-90dd3800fe20","type":"Plot"},"ticker":{"id":"144ff0f9-d0cb-45c6-8270-15b58ccdfca6","type":"BasicTicker"}},"id":"9da2f671-684e-4775-a573-26de231c9c97","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#e6550d"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7a5708d0-0bb7-4d27-a164-70f61f6cd295","type":"Cross"},{"attributes":{"data_source":{"id":"f9fb2168-26fa-4162-840a-c854968b3e10","type":"ColumnDataSource"},"glyph":{"id":"7a5708d0-0bb7-4d27-a164-70f61f6cd295","type":"Cross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2c859e0d-8ddc-428e-84f1-942e3284b4fa","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f28468c1-7073-4e12-b8b4-2a12b9ef8f91","type":"Toolbar"},{"attributes":{"formatter":{"id":"5f2c0728-1482-44ae-825b-7697256df9a7","type":"BasicTickFormatter"},"plot":{"id":"b71df7fc-a4d8-44ef-b873-90dd3800fe20","type":"Plot"},"ticker":{"id":"80500eff-e722-4dcf-8aaf-120a48d849ea","type":"BasicTicker"}},"id":"a64e34cd-a130-4868-8019-d4bb3b1e6e43","type":"LinearAxis"},{"attributes":{"below":[{"id":"a64e34cd-a130-4868-8019-d4bb3b1e6e43","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9da2f671-684e-4775-a573-26de231c9c97","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"2c859e0d-8ddc-428e-84f1-942e3284b4fa","type":"GlyphRenderer"},{"id":"a64e34cd-a130-4868-8019-d4bb3b1e6e43","type":"LinearAxis"},{"id":"9da2f671-684e-4775-a573-26de231c9c97","type":"LinearAxis"},{"id":"4ff4ab95-4df4-424f-b8cf-444a3c2b3bff","type":"Grid"},{"id":"b89323de-602e-46de-b584-99342d0e73e6","type":"Grid"}],"title":null,"tool_events":{"id":"44c39db9-ac14-4bb5-a15a-d13fc8a73a11","type":"ToolEvents"},"toolbar":{"id":"f28468c1-7073-4e12-b8b4-2a12b9ef8f91","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9c4c1d4a-c9c1-457b-8897-876137cb651b","type":"DataRange1d"},"y_range":{"id":"aa281c68-7d18-4bdc-b34f-55dd5ead8569","type":"DataRange1d"}},"id":"b71df7fc-a4d8-44ef-b873-90dd3800fe20","type":"Plot"},{"attributes":{"plot":{"id":"b71df7fc-a4d8-44ef-b873-90dd3800fe20","type":"Plot"},"ticker":{"id":"80500eff-e722-4dcf-8aaf-120a48d849ea","type":"BasicTicker"}},"id":"4ff4ab95-4df4-424f-b8cf-444a3c2b3bff","type":"Grid"},{"attributes":{},"id":"5f2c0728-1482-44ae-825b-7697256df9a7","type":"BasicTickFormatter"},{"attributes":{},"id":"144ff0f9-d0cb-45c6-8270-15b58ccdfca6","type":"BasicTicker"},{"attributes":{},"id":"44c39db9-ac14-4bb5-a15a-d13fc8a73a11","type":"ToolEvents"},{"attributes":{"callback":null},"id":"9c4c1d4a-c9c1-457b-8897-876137cb651b","type":"DataRange1d"},{"attributes":{},"id":"80500eff-e722-4dcf-8aaf-120a48d849ea","type":"BasicTicker"}],"root_ids":["b71df7fc-a4d8-44ef-b873-90dd3800fe20"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"081f5873-51fd-49b4-9018-97cf1aceac4c","elementid":"3b40f504-ada4-447c-af01-43922a64f1f8","modelid":"b71df7fc-a4d8-44ef-b873-90dd3800fe20"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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