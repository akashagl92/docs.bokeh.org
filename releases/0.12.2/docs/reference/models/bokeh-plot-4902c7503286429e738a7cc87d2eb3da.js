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
      };var element = document.getElementById("a4bfc4a3-fe55-4525-a589-9cac9009e312");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a4bfc4a3-fe55-4525-a589-9cac9009e312' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"06f8659d-9713-4132-bee2-21ba59c925d5":{"roots":{"references":[{"attributes":{},"id":"1b88c3b4-41d2-446d-bc12-46e812525588","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b99c5bf0-e78d-405c-8814-b5244e838eda","type":"Toolbar"},{"attributes":{},"id":"ed24610f-4e41-485f-8083-849c7eeb92c0","type":"BasicTicker"},{"attributes":{"data_source":{"id":"4d251722-deec-471f-a911-798e9cc9adb4","type":"ColumnDataSource"},"glyph":{"id":"ff0d3255-3ff3-4090-9059-833059eb8696","type":"SquareCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"84ce5390-4fd8-4988-92d2-58987f5fbb1d","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1b88c3b4-41d2-446d-bc12-46e812525588","type":"BasicTickFormatter"},"plot":{"id":"e801e679-a8cb-4f54-bf6d-4fe9ec935943","type":"Plot"},"ticker":{"id":"b703547f-9f0c-4aaa-8843-91997bd9bd71","type":"BasicTicker"}},"id":"9afb4e73-4e7d-4d59-b5ed-8d635fc1bad8","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"4d251722-deec-471f-a911-798e9cc9adb4","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"88f84651-9814-41a4-8af9-535f60b288ea","type":"DataRange1d"},{"attributes":{"below":[{"id":"800a3d93-d2e6-4cde-bb68-a48157257575","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9afb4e73-4e7d-4d59-b5ed-8d635fc1bad8","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"84ce5390-4fd8-4988-92d2-58987f5fbb1d","type":"GlyphRenderer"},{"id":"800a3d93-d2e6-4cde-bb68-a48157257575","type":"LinearAxis"},{"id":"9afb4e73-4e7d-4d59-b5ed-8d635fc1bad8","type":"LinearAxis"},{"id":"02df9794-dac6-44b5-90aa-723f0db19232","type":"Grid"},{"id":"ed5399f7-d83d-4cb4-a9e8-2bac93e839a7","type":"Grid"}],"title":null,"tool_events":{"id":"af47a65c-6648-443c-8ed3-9641b72d9d96","type":"ToolEvents"},"toolbar":{"id":"b99c5bf0-e78d-405c-8814-b5244e838eda","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"903591d5-54c4-45f1-83a5-92ba505dcba6","type":"DataRange1d"},"y_range":{"id":"88f84651-9814-41a4-8af9-535f60b288ea","type":"DataRange1d"}},"id":"e801e679-a8cb-4f54-bf6d-4fe9ec935943","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"e801e679-a8cb-4f54-bf6d-4fe9ec935943","type":"Plot"},"ticker":{"id":"b703547f-9f0c-4aaa-8843-91997bd9bd71","type":"BasicTicker"}},"id":"ed5399f7-d83d-4cb4-a9e8-2bac93e839a7","type":"Grid"},{"attributes":{"plot":{"id":"e801e679-a8cb-4f54-bf6d-4fe9ec935943","type":"Plot"},"ticker":{"id":"ed24610f-4e41-485f-8083-849c7eeb92c0","type":"BasicTicker"}},"id":"02df9794-dac6-44b5-90aa-723f0db19232","type":"Grid"},{"attributes":{},"id":"95378664-1860-416e-9fff-e7e1fd47772e","type":"BasicTickFormatter"},{"attributes":{},"id":"af47a65c-6648-443c-8ed3-9641b72d9d96","type":"ToolEvents"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7fc97f"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff0d3255-3ff3-4090-9059-833059eb8696","type":"SquareCross"},{"attributes":{},"id":"b703547f-9f0c-4aaa-8843-91997bd9bd71","type":"BasicTicker"},{"attributes":{"callback":null},"id":"903591d5-54c4-45f1-83a5-92ba505dcba6","type":"DataRange1d"},{"attributes":{"formatter":{"id":"95378664-1860-416e-9fff-e7e1fd47772e","type":"BasicTickFormatter"},"plot":{"id":"e801e679-a8cb-4f54-bf6d-4fe9ec935943","type":"Plot"},"ticker":{"id":"ed24610f-4e41-485f-8083-849c7eeb92c0","type":"BasicTicker"}},"id":"800a3d93-d2e6-4cde-bb68-a48157257575","type":"LinearAxis"}],"root_ids":["e801e679-a8cb-4f54-bf6d-4fe9ec935943"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"06f8659d-9713-4132-bee2-21ba59c925d5","elementid":"a4bfc4a3-fe55-4525-a589-9cac9009e312","modelid":"e801e679-a8cb-4f54-bf6d-4fe9ec935943"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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