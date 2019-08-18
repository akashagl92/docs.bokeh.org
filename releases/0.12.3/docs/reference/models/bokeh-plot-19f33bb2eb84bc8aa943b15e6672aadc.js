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
      };var element = document.getElementById("dcb50639-d82d-4010-a4dd-21f160ed69d9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dcb50639-d82d-4010-a4dd-21f160ed69d9' but no matching script tag was found. ")
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
                  var docs_json = {"4b2c84b2-ca4e-4eb6-9ab0-5d11b028d607":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7844f6df-51e2-4978-bcf1-5b30f6ad2981","type":"Toolbar"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#99d594"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"96eef99d-668d-47c7-81ca-464cf5e87bd0","type":"Triangle"},{"attributes":{"dimension":1,"plot":{"id":"10026f45-fcb0-4d4f-bd48-0433723f7824","type":"Plot"},"ticker":{"id":"7c1d0745-954a-4219-82c2-2178899295ad","type":"BasicTicker"}},"id":"7c6fdf21-a879-4549-9e28-624d82a67760","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"7e034138-b9e9-4b30-b745-0a941caa301d","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"9dd6f917-6cec-42dd-9692-95b5b6757362","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7e034138-b9e9-4b30-b745-0a941caa301d","type":"ColumnDataSource"},"glyph":{"id":"96eef99d-668d-47c7-81ca-464cf5e87bd0","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"06d193e7-cd16-4919-92c0-7287135e69b9","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"fd7d6a2f-0f51-4434-a549-53ca11a57059","type":"DataRange1d"},{"attributes":{"below":[{"id":"14b3a4c1-b8a0-4e02-b39c-4d3a8cfc9849","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4235ac0c-c661-4cd8-a256-efd4ba5a9862","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"06d193e7-cd16-4919-92c0-7287135e69b9","type":"GlyphRenderer"},{"id":"14b3a4c1-b8a0-4e02-b39c-4d3a8cfc9849","type":"LinearAxis"},{"id":"4235ac0c-c661-4cd8-a256-efd4ba5a9862","type":"LinearAxis"},{"id":"6856a2c9-97ea-4165-90cb-14f71fc2d7dc","type":"Grid"},{"id":"7c6fdf21-a879-4549-9e28-624d82a67760","type":"Grid"}],"title":null,"tool_events":{"id":"1f345bb4-5b57-4708-aa17-5845052c132b","type":"ToolEvents"},"toolbar":{"id":"7844f6df-51e2-4978-bcf1-5b30f6ad2981","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"fd7d6a2f-0f51-4434-a549-53ca11a57059","type":"DataRange1d"},"y_range":{"id":"9dd6f917-6cec-42dd-9692-95b5b6757362","type":"DataRange1d"}},"id":"10026f45-fcb0-4d4f-bd48-0433723f7824","type":"Plot"},{"attributes":{},"id":"1f345bb4-5b57-4708-aa17-5845052c132b","type":"ToolEvents"},{"attributes":{"formatter":{"id":"20b5c5fd-b40b-400a-91a1-1eb6eb06f971","type":"BasicTickFormatter"},"plot":{"id":"10026f45-fcb0-4d4f-bd48-0433723f7824","type":"Plot"},"ticker":{"id":"7c1d0745-954a-4219-82c2-2178899295ad","type":"BasicTicker"}},"id":"4235ac0c-c661-4cd8-a256-efd4ba5a9862","type":"LinearAxis"},{"attributes":{"formatter":{"id":"99069b62-b507-4ed3-b555-fa7ef6c9a1a9","type":"BasicTickFormatter"},"plot":{"id":"10026f45-fcb0-4d4f-bd48-0433723f7824","type":"Plot"},"ticker":{"id":"1ed0c0c6-31f8-4858-8a88-58cbb60cb6b3","type":"BasicTicker"}},"id":"14b3a4c1-b8a0-4e02-b39c-4d3a8cfc9849","type":"LinearAxis"},{"attributes":{},"id":"99069b62-b507-4ed3-b555-fa7ef6c9a1a9","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"10026f45-fcb0-4d4f-bd48-0433723f7824","type":"Plot"},"ticker":{"id":"1ed0c0c6-31f8-4858-8a88-58cbb60cb6b3","type":"BasicTicker"}},"id":"6856a2c9-97ea-4165-90cb-14f71fc2d7dc","type":"Grid"},{"attributes":{},"id":"1ed0c0c6-31f8-4858-8a88-58cbb60cb6b3","type":"BasicTicker"},{"attributes":{},"id":"20b5c5fd-b40b-400a-91a1-1eb6eb06f971","type":"BasicTickFormatter"},{"attributes":{},"id":"7c1d0745-954a-4219-82c2-2178899295ad","type":"BasicTicker"}],"root_ids":["10026f45-fcb0-4d4f-bd48-0433723f7824"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"4b2c84b2-ca4e-4eb6-9ab0-5d11b028d607","elementid":"dcb50639-d82d-4010-a4dd-21f160ed69d9","modelid":"10026f45-fcb0-4d4f-bd48-0433723f7824"}];
                  
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