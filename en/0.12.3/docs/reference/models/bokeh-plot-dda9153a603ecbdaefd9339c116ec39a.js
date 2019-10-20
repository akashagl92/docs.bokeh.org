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
      };var element = document.getElementById("d4bf2cb8-04be-4777-a64e-f72ded99afa9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd4bf2cb8-04be-4777-a64e-f72ded99afa9' but no matching script tag was found. ")
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
                  var docs_json = {"5aba2a79-ad16-4bd6-afec-33cbff02e2cf":{"roots":{"references":[{"attributes":{"formatter":{"id":"c17f02e1-eec8-4d5e-993f-6fd6abf87c95","type":"BasicTickFormatter"},"plot":{"id":"22900af0-81e8-4a8a-b4fa-0699d54c7cc3","type":"Plot"},"ticker":{"id":"2c60ef57-deca-4f62-8074-aac1fc6c60f2","type":"BasicTicker"}},"id":"baa4303b-9429-4372-8e1f-0ce9ce1d83ba","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6e9358eb-8bed-44c8-9b31-36cf3716203a","type":"Text"},{"attributes":{"below":[{"id":"baa4303b-9429-4372-8e1f-0ce9ce1d83ba","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"cda4a53d-eb61-4eb9-92e6-41b34d0b8c20","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"40884145-0705-4d51-9c6d-af58c856cfd2","type":"GlyphRenderer"},{"id":"baa4303b-9429-4372-8e1f-0ce9ce1d83ba","type":"LinearAxis"},{"id":"cda4a53d-eb61-4eb9-92e6-41b34d0b8c20","type":"LinearAxis"},{"id":"6bc44fa5-b1b1-4ea8-bcb8-651c0ac25280","type":"Grid"},{"id":"afc198cb-3b3d-49b9-bcc5-1eb282203e26","type":"Grid"}],"title":null,"tool_events":{"id":"719ab216-f17a-4571-bdb6-833a914aee5b","type":"ToolEvents"},"toolbar":{"id":"a6d5b0bd-9130-485c-9679-58364bcf6092","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c9606d1f-ab31-4677-9717-d1b42546e3e6","type":"DataRange1d"},"y_range":{"id":"c7a729b5-f701-40b8-8cbf-237237affa5c","type":"DataRange1d"}},"id":"22900af0-81e8-4a8a-b4fa-0699d54c7cc3","type":"Plot"},{"attributes":{"data_source":{"id":"15423158-13d8-43ef-9125-a4166d51d441","type":"ColumnDataSource"},"glyph":{"id":"6e9358eb-8bed-44c8-9b31-36cf3716203a","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"40884145-0705-4d51-9c6d-af58c856cfd2","type":"GlyphRenderer"},{"attributes":{},"id":"c17f02e1-eec8-4d5e-993f-6fd6abf87c95","type":"BasicTickFormatter"},{"attributes":{},"id":"e5569c2a-e469-4285-b163-7b720d51bf82","type":"BasicTickFormatter"},{"attributes":{},"id":"26ce0929-f366-4671-a4d7-431ee100de45","type":"BasicTicker"},{"attributes":{"callback":null},"id":"c9606d1f-ab31-4677-9717-d1b42546e3e6","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","text","x"],"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"15423158-13d8-43ef-9125-a4166d51d441","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"c7a729b5-f701-40b8-8cbf-237237affa5c","type":"DataRange1d"},{"attributes":{},"id":"2c60ef57-deca-4f62-8074-aac1fc6c60f2","type":"BasicTicker"},{"attributes":{"formatter":{"id":"e5569c2a-e469-4285-b163-7b720d51bf82","type":"BasicTickFormatter"},"plot":{"id":"22900af0-81e8-4a8a-b4fa-0699d54c7cc3","type":"Plot"},"ticker":{"id":"26ce0929-f366-4671-a4d7-431ee100de45","type":"BasicTicker"}},"id":"cda4a53d-eb61-4eb9-92e6-41b34d0b8c20","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"a6d5b0bd-9130-485c-9679-58364bcf6092","type":"Toolbar"},{"attributes":{"plot":{"id":"22900af0-81e8-4a8a-b4fa-0699d54c7cc3","type":"Plot"},"ticker":{"id":"2c60ef57-deca-4f62-8074-aac1fc6c60f2","type":"BasicTicker"}},"id":"6bc44fa5-b1b1-4ea8-bcb8-651c0ac25280","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"22900af0-81e8-4a8a-b4fa-0699d54c7cc3","type":"Plot"},"ticker":{"id":"26ce0929-f366-4671-a4d7-431ee100de45","type":"BasicTicker"}},"id":"afc198cb-3b3d-49b9-bcc5-1eb282203e26","type":"Grid"},{"attributes":{},"id":"719ab216-f17a-4571-bdb6-833a914aee5b","type":"ToolEvents"}],"root_ids":["22900af0-81e8-4a8a-b4fa-0699d54c7cc3"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"5aba2a79-ad16-4bd6-afec-33cbff02e2cf","elementid":"d4bf2cb8-04be-4777-a64e-f72ded99afa9","modelid":"22900af0-81e8-4a8a-b4fa-0699d54c7cc3"}];
                  
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