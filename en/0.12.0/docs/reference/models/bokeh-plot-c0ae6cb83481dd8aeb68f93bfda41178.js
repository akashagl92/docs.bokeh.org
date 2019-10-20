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
      };var element = document.getElementById("9415ab08-2a74-4b1d-a4f6-ff6ba7435114");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9415ab08-2a74-4b1d-a4f6-ff6ba7435114' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"f5fc250e-b999-4ae7-9b57-1df2f938ec3a":{"roots":{"references":[{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9ff8e778-51b1-42f1-b0cd-38175aad4773","type":"DiamondCross"},{"attributes":{"below":[{"id":"8b81251a-1060-4d2f-a8a4-ea1c8a17bdfc","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"660c8ed7-b804-4a90-a324-8962e117d4db","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"45bd3814-0c92-4b8b-b5f0-154adc26effe","type":"GlyphRenderer"},{"id":"8b81251a-1060-4d2f-a8a4-ea1c8a17bdfc","type":"LinearAxis"},{"id":"660c8ed7-b804-4a90-a324-8962e117d4db","type":"LinearAxis"},{"id":"2d6f9937-c802-46f8-9fcd-f776db2711cc","type":"Grid"},{"id":"dbe864cc-a7b3-49d8-b9f6-ad6fb2ee3bb0","type":"Grid"}],"title":null,"tool_events":{"id":"dfaf0911-b2c8-481f-b78f-ea574e708683","type":"ToolEvents"},"toolbar":{"id":"7adc677f-128a-4e49-abf1-de07a3e19477","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"30b58e2c-4b15-4330-b1bb-2fe2e302fba7","type":"DataRange1d"},"y_range":{"id":"cc4f6497-678c-4bf1-b7db-620085597462","type":"DataRange1d"}},"id":"40ca9c1b-2b1d-4e1d-8d81-3ff2351860d2","type":"Plot"},{"attributes":{"callback":null},"id":"cc4f6497-678c-4bf1-b7db-620085597462","type":"DataRange1d"},{"attributes":{},"id":"ff8fe076-1b30-4a38-8f16-d91cb2ee8886","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"0a3a5427-0442-4f20-a269-8499a030a9f5","type":"ColumnDataSource"},"glyph":{"id":"9ff8e778-51b1-42f1-b0cd-38175aad4773","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"45bd3814-0c92-4b8b-b5f0-154adc26effe","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"40ca9c1b-2b1d-4e1d-8d81-3ff2351860d2","type":"Plot"},"ticker":{"id":"3cb94ff6-6005-43c9-a19b-dd159a9b657f","type":"BasicTicker"}},"id":"dbe864cc-a7b3-49d8-b9f6-ad6fb2ee3bb0","type":"Grid"},{"attributes":{"formatter":{"id":"9fbee92d-8af7-478e-9b55-02f93471b8a1","type":"BasicTickFormatter"},"plot":{"id":"40ca9c1b-2b1d-4e1d-8d81-3ff2351860d2","type":"Plot"},"ticker":{"id":"3cb94ff6-6005-43c9-a19b-dd159a9b657f","type":"BasicTicker"}},"id":"660c8ed7-b804-4a90-a324-8962e117d4db","type":"LinearAxis"},{"attributes":{},"id":"9fbee92d-8af7-478e-9b55-02f93471b8a1","type":"BasicTickFormatter"},{"attributes":{},"id":"d5fb7c62-3a1d-41e1-abf7-118e1d8fb364","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"0a3a5427-0442-4f20-a269-8499a030a9f5","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"40ca9c1b-2b1d-4e1d-8d81-3ff2351860d2","type":"Plot"},"ticker":{"id":"d5fb7c62-3a1d-41e1-abf7-118e1d8fb364","type":"BasicTicker"}},"id":"2d6f9937-c802-46f8-9fcd-f776db2711cc","type":"Grid"},{"attributes":{"callback":null},"id":"30b58e2c-4b15-4330-b1bb-2fe2e302fba7","type":"DataRange1d"},{"attributes":{},"id":"dfaf0911-b2c8-481f-b78f-ea574e708683","type":"ToolEvents"},{"attributes":{"formatter":{"id":"ff8fe076-1b30-4a38-8f16-d91cb2ee8886","type":"BasicTickFormatter"},"plot":{"id":"40ca9c1b-2b1d-4e1d-8d81-3ff2351860d2","type":"Plot"},"ticker":{"id":"d5fb7c62-3a1d-41e1-abf7-118e1d8fb364","type":"BasicTicker"}},"id":"8b81251a-1060-4d2f-a8a4-ea1c8a17bdfc","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"7adc677f-128a-4e49-abf1-de07a3e19477","type":"Toolbar"},{"attributes":{},"id":"3cb94ff6-6005-43c9-a19b-dd159a9b657f","type":"BasicTicker"}],"root_ids":["40ca9c1b-2b1d-4e1d-8d81-3ff2351860d2"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"f5fc250e-b999-4ae7-9b57-1df2f938ec3a","elementid":"9415ab08-2a74-4b1d-a4f6-ff6ba7435114","modelid":"40ca9c1b-2b1d-4e1d-8d81-3ff2351860d2"}];
              
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