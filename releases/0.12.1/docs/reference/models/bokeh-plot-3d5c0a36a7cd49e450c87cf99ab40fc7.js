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
      };var element = document.getElementById("b2846510-25bb-4df2-9f71-2344ea04c138");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b2846510-25bb-4df2-9f71-2344ea04c138' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"b5fcafa2-3243-41af-a26d-505cf4aaeed4":{"roots":{"references":[{"attributes":{"callback":null},"id":"6ce55ce4-c144-4a05-bbfd-f9b845127dc6","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9b7d1d09-062d-447d-82fc-6452be0b5dfe","type":"BasicTickFormatter"},"plot":{"id":"6b3f5f2b-4d8b-4064-8335-e0ec79bca565","type":"Plot"},"ticker":{"id":"7c569e96-2d2f-4589-a7a7-3e3781b719d7","type":"BasicTicker"}},"id":"240d8f9d-88eb-48b4-8635-3c2224985696","type":"LinearAxis"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"line_color":{"value":"#beaed4"},"line_width":{"value":3},"radius":{"field":"r","units":"data"},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"6dbd9dd6-18a7-464e-b031-62b668842d82","type":"Arc"},{"attributes":{},"id":"61a8c9e7-3ee4-4f2b-9c9d-fb1953075184","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","r"],"data":{"r":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"aa5abac9-db9b-4d4d-9d0b-0e6c0f72c08e","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d390fa4c-954e-401b-8131-9aec6c3b16f1","type":"Toolbar"},{"attributes":{},"id":"0691ae24-aa8e-4415-aee3-98d6d2081499","type":"ToolEvents"},{"attributes":{"below":[{"id":"240d8f9d-88eb-48b4-8635-3c2224985696","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8ef0e8dd-c1bc-4748-8f25-189f8d52c277","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f3230d68-76d9-48c9-bf73-3daa6bb5b5b4","type":"GlyphRenderer"},{"id":"240d8f9d-88eb-48b4-8635-3c2224985696","type":"LinearAxis"},{"id":"8ef0e8dd-c1bc-4748-8f25-189f8d52c277","type":"LinearAxis"},{"id":"1d6740cf-b212-46d6-add3-4c3d05266ceb","type":"Grid"},{"id":"bdea4412-d11f-4e56-bf69-a9557b40fade","type":"Grid"}],"title":null,"tool_events":{"id":"0691ae24-aa8e-4415-aee3-98d6d2081499","type":"ToolEvents"},"toolbar":{"id":"d390fa4c-954e-401b-8131-9aec6c3b16f1","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6ce55ce4-c144-4a05-bbfd-f9b845127dc6","type":"DataRange1d"},"y_range":{"id":"ab4a4c4f-30f5-473b-8834-270186ccf232","type":"DataRange1d"}},"id":"6b3f5f2b-4d8b-4064-8335-e0ec79bca565","type":"Plot"},{"attributes":{},"id":"7c569e96-2d2f-4589-a7a7-3e3781b719d7","type":"BasicTicker"},{"attributes":{"callback":null},"id":"ab4a4c4f-30f5-473b-8834-270186ccf232","type":"DataRange1d"},{"attributes":{},"id":"9b7d1d09-062d-447d-82fc-6452be0b5dfe","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"6b3f5f2b-4d8b-4064-8335-e0ec79bca565","type":"Plot"},"ticker":{"id":"7c569e96-2d2f-4589-a7a7-3e3781b719d7","type":"BasicTicker"}},"id":"1d6740cf-b212-46d6-add3-4c3d05266ceb","type":"Grid"},{"attributes":{"data_source":{"id":"aa5abac9-db9b-4d4d-9d0b-0e6c0f72c08e","type":"ColumnDataSource"},"glyph":{"id":"6dbd9dd6-18a7-464e-b031-62b668842d82","type":"Arc"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f3230d68-76d9-48c9-bf73-3daa6bb5b5b4","type":"GlyphRenderer"},{"attributes":{},"id":"75365917-98cc-4516-a14c-33151b0a33fe","type":"BasicTicker"},{"attributes":{"formatter":{"id":"61a8c9e7-3ee4-4f2b-9c9d-fb1953075184","type":"BasicTickFormatter"},"plot":{"id":"6b3f5f2b-4d8b-4064-8335-e0ec79bca565","type":"Plot"},"ticker":{"id":"75365917-98cc-4516-a14c-33151b0a33fe","type":"BasicTicker"}},"id":"8ef0e8dd-c1bc-4748-8f25-189f8d52c277","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"6b3f5f2b-4d8b-4064-8335-e0ec79bca565","type":"Plot"},"ticker":{"id":"75365917-98cc-4516-a14c-33151b0a33fe","type":"BasicTicker"}},"id":"bdea4412-d11f-4e56-bf69-a9557b40fade","type":"Grid"}],"root_ids":["6b3f5f2b-4d8b-4064-8335-e0ec79bca565"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"b5fcafa2-3243-41af-a26d-505cf4aaeed4","elementid":"b2846510-25bb-4df2-9f71-2344ea04c138","modelid":"6b3f5f2b-4d8b-4064-8335-e0ec79bca565"}];
              
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