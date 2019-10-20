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
      };var element = document.getElementById("c79174ab-1ef4-47fa-9033-8cf807c93bad");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c79174ab-1ef4-47fa-9033-8cf807c93bad' but no matching script tag was found. ")
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
                  var docs_json = {"b698037f-895c-43f2-b5da-6d9860173476":{"roots":{"references":[{"attributes":{},"id":"07640643-8f4b-4679-bb93-8c2280946826","type":"BasicTickFormatter"},{"attributes":{},"id":"0000df7f-3552-47ab-a690-05fa66c9eedf","type":"BasicTicker"},{"attributes":{"plot":{"id":"c49398ac-d82d-4f96-b92d-a1f96ccf62c7","type":"Plot"},"ticker":{"id":"0f21bf04-3263-4b58-a8dc-c04c2eaa1c08","type":"BasicTicker"}},"id":"5b7a09e5-9b5b-49e7-824d-631e59f5d935","type":"Grid"},{"attributes":{"fill_color":{"value":"#b3de69"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"351be4c2-55d4-4952-b105-3ed58263d185","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0]}},"id":"0b2d5bdd-4763-4298-a1ee-1dfacb101346","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"f231941b-7c12-4767-a77d-8374cd31aaba","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d5df131d-4371-4f98-863b-2d66fa1d552c","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"af770c17-7b1b-46fe-b832-c42b832cc0ee","type":"GlyphRenderer"},{"id":"f231941b-7c12-4767-a77d-8374cd31aaba","type":"LinearAxis"},{"id":"d5df131d-4371-4f98-863b-2d66fa1d552c","type":"LinearAxis"},{"id":"5b7a09e5-9b5b-49e7-824d-631e59f5d935","type":"Grid"},{"id":"004f9280-2433-4b86-a9c8-b2522c7b055d","type":"Grid"}],"title":null,"tool_events":{"id":"da61b98b-d919-4d34-b13a-0ee9c447b4ba","type":"ToolEvents"},"toolbar":{"id":"08ba6b72-060c-44d4-bfbf-74ca9ccb6722","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96e183e0-0192-46ad-951a-5cb16bed282e","type":"DataRange1d"},"y_range":{"id":"8e62b956-098d-436f-b7b7-023c0ee42d6b","type":"DataRange1d"}},"id":"c49398ac-d82d-4f96-b92d-a1f96ccf62c7","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"c49398ac-d82d-4f96-b92d-a1f96ccf62c7","type":"Plot"},"ticker":{"id":"0000df7f-3552-47ab-a690-05fa66c9eedf","type":"BasicTicker"}},"id":"004f9280-2433-4b86-a9c8-b2522c7b055d","type":"Grid"},{"attributes":{"callback":null},"id":"96e183e0-0192-46ad-951a-5cb16bed282e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"07640643-8f4b-4679-bb93-8c2280946826","type":"BasicTickFormatter"},"plot":{"id":"c49398ac-d82d-4f96-b92d-a1f96ccf62c7","type":"Plot"},"ticker":{"id":"0f21bf04-3263-4b58-a8dc-c04c2eaa1c08","type":"BasicTicker"}},"id":"f231941b-7c12-4767-a77d-8374cd31aaba","type":"LinearAxis"},{"attributes":{},"id":"85e2f256-d240-4c47-b335-19c5620119e9","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"0b2d5bdd-4763-4298-a1ee-1dfacb101346","type":"ColumnDataSource"},"glyph":{"id":"351be4c2-55d4-4952-b105-3ed58263d185","type":"VBar"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"af770c17-7b1b-46fe-b832-c42b832cc0ee","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"85e2f256-d240-4c47-b335-19c5620119e9","type":"BasicTickFormatter"},"plot":{"id":"c49398ac-d82d-4f96-b92d-a1f96ccf62c7","type":"Plot"},"ticker":{"id":"0000df7f-3552-47ab-a690-05fa66c9eedf","type":"BasicTicker"}},"id":"d5df131d-4371-4f98-863b-2d66fa1d552c","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"08ba6b72-060c-44d4-bfbf-74ca9ccb6722","type":"Toolbar"},{"attributes":{},"id":"0f21bf04-3263-4b58-a8dc-c04c2eaa1c08","type":"BasicTicker"},{"attributes":{},"id":"da61b98b-d919-4d34-b13a-0ee9c447b4ba","type":"ToolEvents"},{"attributes":{"callback":null},"id":"8e62b956-098d-436f-b7b7-023c0ee42d6b","type":"DataRange1d"}],"root_ids":["c49398ac-d82d-4f96-b92d-a1f96ccf62c7"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"b698037f-895c-43f2-b5da-6d9860173476","elementid":"c79174ab-1ef4-47fa-9033-8cf807c93bad","modelid":"c49398ac-d82d-4f96-b92d-a1f96ccf62c7"}];
                  
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