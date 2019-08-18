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
      };var element = document.getElementById("96d8c445-d583-44ab-a294-cdd7dec94bd0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '96d8c445-d583-44ab-a294-cdd7dec94bd0' but no matching script tag was found. ")
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
                  var docs_json = {"998a06ab-1d99-4318-97bb-0223cf95384d":{"roots":{"references":[{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"29ecde89-a7cb-488a-a91d-c928fc5ccb9b","type":"Quad"},{"attributes":{},"id":"2129c08e-291f-4fe8-b09b-80fc8c3aaba2","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["top","right","bottom","left"],"data":{"bottom":[4.1,2.525,1.4,0.725,0.5,0.725,1.4,2.525,4.1],"left":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"right":[-0.8999999999999999,-0.8625,-0.6000000000000001,-0.1875,0.3,0.7875,1.2,1.4625000000000001,1.5],"top":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"7b5b7f4e-2150-4e5f-b261-4ebd7d8dca28","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"5d66f178-5c1c-4e5c-ad2d-da4122101009","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"65bd8cc0-dc8c-4d21-b52d-7d5e78b94481","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"d506a44d-629d-43fa-80b5-c40c076492cc","type":"GlyphRenderer"},{"id":"5d66f178-5c1c-4e5c-ad2d-da4122101009","type":"LinearAxis"},{"id":"65bd8cc0-dc8c-4d21-b52d-7d5e78b94481","type":"LinearAxis"},{"id":"9ef3d8e8-8e83-410a-9e7e-df425f636815","type":"Grid"},{"id":"c3d70d4a-4d16-45ee-8b7b-aba1eee029f4","type":"Grid"}],"title":null,"tool_events":{"id":"62f300ab-f06c-4a8b-8720-1f4292db4ac1","type":"ToolEvents"},"toolbar":{"id":"21c42298-e58f-4894-ab03-6feec8ef1588","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"9cb29173-c974-455b-ad78-920e3e542f82","type":"DataRange1d"},"y_range":{"id":"d420ed12-af28-4e00-97f0-de21cb7c8af2","type":"DataRange1d"}},"id":"392a6cf6-4b43-4c38-8e37-6514346f12e2","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"21c42298-e58f-4894-ab03-6feec8ef1588","type":"Toolbar"},{"attributes":{"plot":{"id":"392a6cf6-4b43-4c38-8e37-6514346f12e2","type":"Plot"},"ticker":{"id":"ff7cfc1a-4277-41ea-827d-6c96903847f9","type":"BasicTicker"}},"id":"9ef3d8e8-8e83-410a-9e7e-df425f636815","type":"Grid"},{"attributes":{},"id":"99594d94-f511-444e-8f3b-1f46c4090976","type":"BasicTickFormatter"},{"attributes":{},"id":"62f300ab-f06c-4a8b-8720-1f4292db4ac1","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"392a6cf6-4b43-4c38-8e37-6514346f12e2","type":"Plot"},"ticker":{"id":"2129c08e-291f-4fe8-b09b-80fc8c3aaba2","type":"BasicTicker"}},"id":"c3d70d4a-4d16-45ee-8b7b-aba1eee029f4","type":"Grid"},{"attributes":{},"id":"3972aedc-a915-4a8b-b799-32fd72d07f85","type":"BasicTickFormatter"},{"attributes":{},"id":"ff7cfc1a-4277-41ea-827d-6c96903847f9","type":"BasicTicker"},{"attributes":{"formatter":{"id":"3972aedc-a915-4a8b-b799-32fd72d07f85","type":"BasicTickFormatter"},"plot":{"id":"392a6cf6-4b43-4c38-8e37-6514346f12e2","type":"Plot"},"ticker":{"id":"2129c08e-291f-4fe8-b09b-80fc8c3aaba2","type":"BasicTicker"}},"id":"65bd8cc0-dc8c-4d21-b52d-7d5e78b94481","type":"LinearAxis"},{"attributes":{"callback":null},"id":"9cb29173-c974-455b-ad78-920e3e542f82","type":"DataRange1d"},{"attributes":{"data_source":{"id":"7b5b7f4e-2150-4e5f-b261-4ebd7d8dca28","type":"ColumnDataSource"},"glyph":{"id":"29ecde89-a7cb-488a-a91d-c928fc5ccb9b","type":"Quad"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d506a44d-629d-43fa-80b5-c40c076492cc","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"99594d94-f511-444e-8f3b-1f46c4090976","type":"BasicTickFormatter"},"plot":{"id":"392a6cf6-4b43-4c38-8e37-6514346f12e2","type":"Plot"},"ticker":{"id":"ff7cfc1a-4277-41ea-827d-6c96903847f9","type":"BasicTicker"}},"id":"5d66f178-5c1c-4e5c-ad2d-da4122101009","type":"LinearAxis"},{"attributes":{"callback":null},"id":"d420ed12-af28-4e00-97f0-de21cb7c8af2","type":"DataRange1d"}],"root_ids":["392a6cf6-4b43-4c38-8e37-6514346f12e2"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"998a06ab-1d99-4318-97bb-0223cf95384d","elementid":"96d8c445-d583-44ab-a294-cdd7dec94bd0","modelid":"392a6cf6-4b43-4c38-8e37-6514346f12e2"}];
                  
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