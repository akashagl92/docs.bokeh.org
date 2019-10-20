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
      };var element = document.getElementById("43b367c7-a9ab-458a-a7ee-294c4738ab35");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '43b367c7-a9ab-458a-a7ee-294c4738ab35' but no matching script tag was found. ")
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
                  var docs_json = {"9658293c-676a-4622-9b6d-550b57a6686d":{"roots":{"references":[{"attributes":{"formatter":{"id":"b4c695b2-424d-4baf-9b66-43628424e1e5","type":"BasicTickFormatter"},"plot":{"id":"21f5e3b7-93cc-455d-8ec1-b46e8cd4684f","type":"Plot"},"ticker":{"id":"8b32f082-3f1f-4046-beab-13eaa0097416","type":"BasicTicker"}},"id":"ecfe7c4a-a19e-4f7a-aa4e-41279414536a","type":"LinearAxis"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#386cb0"},"line_width":{"value":2},"size":{"field":"sizes","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a8eabe19-1af9-4376-8951-1db762ed895c","type":"DiamondCross"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"dbc623a2-9a6f-49bb-bdfe-7396501b9750","type":"Toolbar"},{"attributes":{"below":[{"id":"ecfe7c4a-a19e-4f7a-aa4e-41279414536a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"98568c6e-8e91-4282-b87c-72ecfc2c892d","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b404f3c1-5972-4701-be45-6d0d9be0868d","type":"GlyphRenderer"},{"id":"ecfe7c4a-a19e-4f7a-aa4e-41279414536a","type":"LinearAxis"},{"id":"98568c6e-8e91-4282-b87c-72ecfc2c892d","type":"LinearAxis"},{"id":"cf1f1808-4761-4da4-a42d-4ec2def8b426","type":"Grid"},{"id":"d1622796-3920-4d9b-bc97-d7d8be0d3b72","type":"Grid"}],"title":null,"tool_events":{"id":"ec2cc067-b323-4812-ae6b-6abdf42c05c6","type":"ToolEvents"},"toolbar":{"id":"dbc623a2-9a6f-49bb-bdfe-7396501b9750","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7d40adab-4069-4f7b-ae22-b97d9d9c3d30","type":"DataRange1d"},"y_range":{"id":"c7b8e6e1-afb3-4618-8016-961a76cc0761","type":"DataRange1d"}},"id":"21f5e3b7-93cc-455d-8ec1-b46e8cd4684f","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"21f5e3b7-93cc-455d-8ec1-b46e8cd4684f","type":"Plot"},"ticker":{"id":"f55a5482-bf73-4ce9-bf90-2b9a9300761a","type":"BasicTicker"}},"id":"d1622796-3920-4d9b-bc97-d7d8be0d3b72","type":"Grid"},{"attributes":{},"id":"f55a5482-bf73-4ce9-bf90-2b9a9300761a","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","sizes"],"data":{"sizes":[10.0,11.25,12.5,13.75,15.0,16.25,17.5,18.75,20.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"4cadf2d2-5454-4fc9-b1c9-e834fdc3975c","type":"ColumnDataSource"},{"attributes":{},"id":"ab0a5034-cf1e-4e96-a56b-d571afd274c1","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"7d40adab-4069-4f7b-ae22-b97d9d9c3d30","type":"DataRange1d"},{"attributes":{"callback":null},"id":"c7b8e6e1-afb3-4618-8016-961a76cc0761","type":"DataRange1d"},{"attributes":{"plot":{"id":"21f5e3b7-93cc-455d-8ec1-b46e8cd4684f","type":"Plot"},"ticker":{"id":"8b32f082-3f1f-4046-beab-13eaa0097416","type":"BasicTicker"}},"id":"cf1f1808-4761-4da4-a42d-4ec2def8b426","type":"Grid"},{"attributes":{},"id":"ec2cc067-b323-4812-ae6b-6abdf42c05c6","type":"ToolEvents"},{"attributes":{},"id":"b4c695b2-424d-4baf-9b66-43628424e1e5","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ab0a5034-cf1e-4e96-a56b-d571afd274c1","type":"BasicTickFormatter"},"plot":{"id":"21f5e3b7-93cc-455d-8ec1-b46e8cd4684f","type":"Plot"},"ticker":{"id":"f55a5482-bf73-4ce9-bf90-2b9a9300761a","type":"BasicTicker"}},"id":"98568c6e-8e91-4282-b87c-72ecfc2c892d","type":"LinearAxis"},{"attributes":{},"id":"8b32f082-3f1f-4046-beab-13eaa0097416","type":"BasicTicker"},{"attributes":{"data_source":{"id":"4cadf2d2-5454-4fc9-b1c9-e834fdc3975c","type":"ColumnDataSource"},"glyph":{"id":"a8eabe19-1af9-4376-8951-1db762ed895c","type":"DiamondCross"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b404f3c1-5972-4701-be45-6d0d9be0868d","type":"GlyphRenderer"}],"root_ids":["21f5e3b7-93cc-455d-8ec1-b46e8cd4684f"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"9658293c-676a-4622-9b6d-550b57a6686d","elementid":"43b367c7-a9ab-458a-a7ee-294c4738ab35","modelid":"21f5e3b7-93cc-455d-8ec1-b46e8cd4684f"}];
                  
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