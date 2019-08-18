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
      };var element = document.getElementById("8d76fc44-7417-44c3-90fd-9016bac95a3b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d76fc44-7417-44c3-90fd-9016bac95a3b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6117ccbd-cd47-497f-8adf-5564315550bc":{"roots":{"references":[{"attributes":{},"id":"90aa24cc-1b0f-460c-bbb1-e4a4c59da7e1","type":"ToolEvents"},{"attributes":{"callback":null},"id":"3ef1a734-0c6c-4461-bb3e-35781d68914b","type":"DataRange1d"},{"attributes":{"formatter":{"id":"61dd9c72-3091-48f7-8c16-f328542dd6d9","type":"BasicTickFormatter"},"plot":{"id":"0c8ffba2-3d01-46cc-a9b3-38b8609565a9","type":"Plot"},"ticker":{"id":"b614d473-0678-4778-9fb3-a0cd28bcf73c","type":"BasicTicker"}},"id":"9b8582dd-baea-428d-ba28-3c7e66910c48","type":"LinearAxis"},{"attributes":{},"id":"b614d473-0678-4778-9fb3-a0cd28bcf73c","type":"BasicTicker"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"b3b36c61-23cd-4c37-b40b-9143b19d450e","type":"Quad"},{"attributes":{"plot":{"id":"0c8ffba2-3d01-46cc-a9b3-38b8609565a9","type":"Plot"},"ticker":{"id":"ecec602a-4cc2-4329-82da-a54bb77615bf","type":"BasicTicker"}},"id":"51333b8d-d6e5-4d61-9b4c-dd8a56923b5f","type":"Grid"},{"attributes":{},"id":"ecec602a-4cc2-4329-82da-a54bb77615bf","type":"BasicTicker"},{"attributes":{},"id":"3b8adedd-9e89-4897-979c-757746371696","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["top","right","bottom","left"],"data":{"bottom":[4.1,2.525,1.4,0.725,0.5,0.725,1.4,2.525,4.1],"left":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"right":[-0.8999999999999999,-0.8625,-0.6000000000000001,-0.1875,0.3,0.7875,1.2,1.4625000000000001,1.5],"top":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"593833fe-cdb5-47b7-a7ce-a8d73fea6ede","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"d6c98986-9d0c-4281-8498-6820f9eed8a3","type":"DataRange1d"},{"attributes":{"below":[{"id":"81e72bc0-5b5a-40ea-8451-ed6918676c0f","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"9b8582dd-baea-428d-ba28-3c7e66910c48","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3eb027ac-be6f-4298-b67f-75b358108135","type":"GlyphRenderer"},{"id":"81e72bc0-5b5a-40ea-8451-ed6918676c0f","type":"LinearAxis"},{"id":"9b8582dd-baea-428d-ba28-3c7e66910c48","type":"LinearAxis"},{"id":"51333b8d-d6e5-4d61-9b4c-dd8a56923b5f","type":"Grid"},{"id":"80f129dd-6b97-43d4-a6a3-6f90569a8bb4","type":"Grid"}],"title":null,"tool_events":{"id":"90aa24cc-1b0f-460c-bbb1-e4a4c59da7e1","type":"ToolEvents"},"toolbar":{"id":"bd327ef7-c8b3-4ea9-a95e-ff6239ddfb8c","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ef1a734-0c6c-4461-bb3e-35781d68914b","type":"DataRange1d"},"y_range":{"id":"d6c98986-9d0c-4281-8498-6820f9eed8a3","type":"DataRange1d"}},"id":"0c8ffba2-3d01-46cc-a9b3-38b8609565a9","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"0c8ffba2-3d01-46cc-a9b3-38b8609565a9","type":"Plot"},"ticker":{"id":"b614d473-0678-4778-9fb3-a0cd28bcf73c","type":"BasicTicker"}},"id":"80f129dd-6b97-43d4-a6a3-6f90569a8bb4","type":"Grid"},{"attributes":{"data_source":{"id":"593833fe-cdb5-47b7-a7ce-a8d73fea6ede","type":"ColumnDataSource"},"glyph":{"id":"b3b36c61-23cd-4c37-b40b-9143b19d450e","type":"Quad"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3eb027ac-be6f-4298-b67f-75b358108135","type":"GlyphRenderer"},{"attributes":{},"id":"61dd9c72-3091-48f7-8c16-f328542dd6d9","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bd327ef7-c8b3-4ea9-a95e-ff6239ddfb8c","type":"Toolbar"},{"attributes":{"formatter":{"id":"3b8adedd-9e89-4897-979c-757746371696","type":"BasicTickFormatter"},"plot":{"id":"0c8ffba2-3d01-46cc-a9b3-38b8609565a9","type":"Plot"},"ticker":{"id":"ecec602a-4cc2-4329-82da-a54bb77615bf","type":"BasicTicker"}},"id":"81e72bc0-5b5a-40ea-8451-ed6918676c0f","type":"LinearAxis"}],"root_ids":["0c8ffba2-3d01-46cc-a9b3-38b8609565a9"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"6117ccbd-cd47-497f-8adf-5564315550bc","elementid":"8d76fc44-7417-44c3-90fd-9016bac95a3b","modelid":"0c8ffba2-3d01-46cc-a9b3-38b8609565a9"}];
              
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