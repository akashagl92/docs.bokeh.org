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
      };var element = document.getElementById("7525f9de-f8a2-41e6-9933-0588343ca00b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '7525f9de-f8a2-41e6-9933-0588343ca00b' but no matching script tag was found. ")
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
                  var docs_json = {"d01dee5d-354d-4fc1-8c4e-c611f4d79d19":{"roots":{"references":[{"attributes":{"callback":null},"id":"da178ccf-ddc1-4c0d-b309-885234d16add","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4dc9dce0-d332-49da-9af7-d95e93ce21f1","type":"Toolbar"},{"attributes":{"data_source":{"id":"7426d001-e564-4d25-8fd5-e7ac46bb8c7a","type":"ColumnDataSource"},"glyph":{"id":"63fdc125-1809-451a-b150-bd06c6fb7062","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"defa2ca3-515e-4c8c-8b58-a3c8c0063112","type":"GlyphRenderer"},{"attributes":{},"id":"14da7d11-9fcb-4084-902d-f7b332690b0b","type":"BasicTickFormatter"},{"attributes":{},"id":"7146b5f6-fd7b-487c-b390-16f9719c5ab6","type":"BasicTicker"},{"attributes":{"below":[{"id":"c78cbd88-2468-4290-b48c-6196ec16c913","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"61b605c8-e8cf-4b86-b085-b2cbfbb8a10f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"defa2ca3-515e-4c8c-8b58-a3c8c0063112","type":"GlyphRenderer"},{"id":"c78cbd88-2468-4290-b48c-6196ec16c913","type":"LinearAxis"},{"id":"61b605c8-e8cf-4b86-b085-b2cbfbb8a10f","type":"LinearAxis"},{"id":"6c052e8b-3213-43dd-ae64-b11ff3d4e74a","type":"Grid"},{"id":"e0601392-dfb7-42b9-9de1-185b1872b46f","type":"Grid"}],"title":null,"tool_events":{"id":"1c0987b5-547c-461c-b545-a8a649ca0b2a","type":"ToolEvents"},"toolbar":{"id":"4dc9dce0-d332-49da-9af7-d95e93ce21f1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"69d8828a-4e71-4a61-8c84-f6fcd559a5dc","type":"DataRange1d"},"y_range":{"id":"da178ccf-ddc1-4c0d-b309-885234d16add","type":"DataRange1d"}},"id":"50dc17f0-edcb-4ab1-b89c-7d82fd618258","type":"Plot"},{"attributes":{},"id":"1c0987b5-547c-461c-b545-a8a649ca0b2a","type":"ToolEvents"},{"attributes":{"formatter":{"id":"90a06a7d-f3bd-4283-90cd-6bdb9dd9bc00","type":"BasicTickFormatter"},"plot":{"id":"50dc17f0-edcb-4ab1-b89c-7d82fd618258","type":"Plot"},"ticker":{"id":"a2d36baf-3b1d-4b4e-8d2f-7a7e9d74421c","type":"BasicTicker"}},"id":"61b605c8-e8cf-4b86-b085-b2cbfbb8a10f","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"7426d001-e564-4d25-8fd5-e7ac46bb8c7a","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"69d8828a-4e71-4a61-8c84-f6fcd559a5dc","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"50dc17f0-edcb-4ab1-b89c-7d82fd618258","type":"Plot"},"ticker":{"id":"a2d36baf-3b1d-4b4e-8d2f-7a7e9d74421c","type":"BasicTicker"}},"id":"e0601392-dfb7-42b9-9de1-185b1872b46f","type":"Grid"},{"attributes":{"plot":{"id":"50dc17f0-edcb-4ab1-b89c-7d82fd618258","type":"Plot"},"ticker":{"id":"7146b5f6-fd7b-487c-b390-16f9719c5ab6","type":"BasicTicker"}},"id":"6c052e8b-3213-43dd-ae64-b11ff3d4e74a","type":"Grid"},{"attributes":{"formatter":{"id":"14da7d11-9fcb-4084-902d-f7b332690b0b","type":"BasicTickFormatter"},"plot":{"id":"50dc17f0-edcb-4ab1-b89c-7d82fd618258","type":"Plot"},"ticker":{"id":"7146b5f6-fd7b-487c-b390-16f9719c5ab6","type":"BasicTicker"}},"id":"c78cbd88-2468-4290-b48c-6196ec16c913","type":"LinearAxis"},{"attributes":{},"id":"a2d36baf-3b1d-4b4e-8d2f-7a7e9d74421c","type":"BasicTicker"},{"attributes":{},"id":"90a06a7d-f3bd-4283-90cd-6bdb9dd9bc00","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#74add1"},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"63fdc125-1809-451a-b150-bd06c6fb7062","type":"Square"}],"root_ids":["50dc17f0-edcb-4ab1-b89c-7d82fd618258"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"d01dee5d-354d-4fc1-8c4e-c611f4d79d19","elementid":"7525f9de-f8a2-41e6-9933-0588343ca00b","modelid":"50dc17f0-edcb-4ab1-b89c-7d82fd618258"}];
                  
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