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
      };var element = document.getElementById("33fc84a9-4599-4b33-a249-02f7bce3f15a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '33fc84a9-4599-4b33-a249-02f7bce3f15a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"2fd2f9e4-e8e0-473b-b708-0ec74c7ee6a2":{"roots":{"references":[{"attributes":{"callback":null},"id":"7a24d791-6680-4931-98cf-b53acf076cb0","type":"DataRange1d"},{"attributes":{"plot":{"id":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2","subtype":"Figure","type":"Plot"}},"id":"cc52273c-4d45-4986-9d78-1a26153b4c91","type":"SaveTool"},{"attributes":{"plot":{"id":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2","subtype":"Figure","type":"Plot"}},"id":"d1d15f07-e9cb-42a4-b1ab-41e82b9fcc7a","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1f1540ca-5148-4cdc-aa6b-f547612ebb38","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2","subtype":"Figure","type":"Plot"}},"id":"01fbf197-2e6f-4f0f-bfe9-8981b9adcf92","type":"ResetTool"},{"attributes":{},"id":"dae92139-8a2b-4567-b26a-71af7ee7e44c","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"77d2b1d3-114f-4a77-b030-e52be6940977","type":"PanTool"},{"id":"d1d15f07-e9cb-42a4-b1ab-41e82b9fcc7a","type":"WheelZoomTool"},{"id":"579f88f9-c68f-4d5c-981d-1734240816de","type":"BoxZoomTool"},{"id":"cc52273c-4d45-4986-9d78-1a26153b4c91","type":"SaveTool"},{"id":"01fbf197-2e6f-4f0f-bfe9-8981b9adcf92","type":"ResetTool"},{"id":"e619db12-4fde-4ef9-88a8-040db93e0a53","type":"HelpTool"}]},"id":"283c86f8-d7e2-4952-9c04-24406c17565d","type":"Toolbar"},{"attributes":{"plot":{"id":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2","subtype":"Figure","type":"Plot"}},"id":"77d2b1d3-114f-4a77-b030-e52be6940977","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a041c19d-df82-4814-90fa-6721bfacfff4","type":"Circle"},{"attributes":{},"id":"6abeb3cc-233e-422b-9488-0a7627e174db","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Iris Morphology"},"id":"56b2f17c-dc01-452d-bfdc-63fcf2d9b74e","type":"Title"},{"attributes":{"axis_label":"Petal Width","formatter":{"id":"dae92139-8a2b-4567-b26a-71af7ee7e44c","type":"BasicTickFormatter"},"plot":{"id":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"d137dce1-f2ee-4d6e-ba47-e2e661acf7bf","type":"BasicTicker"}},"id":"d7550488-72ab-48a3-9672-7df9b1eeb63d","type":"LinearAxis"},{"attributes":{},"id":"d137dce1-f2ee-4d6e-ba47-e2e661acf7bf","type":"BasicTicker"},{"attributes":{"data_source":{"id":"9fa68d9b-afe7-41c9-826d-f2bc73a4b2f8","type":"ColumnDataSource"},"glyph":{"id":"2be6e908-6dde-4f1a-a172-78c05c074281","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a041c19d-df82-4814-90fa-6721bfacfff4","type":"Circle"},"selection_glyph":null},"id":"45c16b1c-dafc-4247-9cc9-aa5aebea813b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2be6e908-6dde-4f1a-a172-78c05c074281","type":"Circle"},{"attributes":{"below":[{"id":"58162130-cc7c-44de-9e91-801508924a32","type":"LinearAxis"}],"left":[{"id":"d7550488-72ab-48a3-9672-7df9b1eeb63d","type":"LinearAxis"}],"renderers":[{"id":"58162130-cc7c-44de-9e91-801508924a32","type":"LinearAxis"},{"id":"e96cc342-ba12-4858-bab0-6e7a94735abb","type":"Grid"},{"id":"d7550488-72ab-48a3-9672-7df9b1eeb63d","type":"LinearAxis"},{"id":"dc557d9e-cb3b-4bb6-8f41-33ff145fd85d","type":"Grid"},{"id":"1f1540ca-5148-4cdc-aa6b-f547612ebb38","type":"BoxAnnotation"},{"id":"45c16b1c-dafc-4247-9cc9-aa5aebea813b","type":"GlyphRenderer"}],"title":{"id":"56b2f17c-dc01-452d-bfdc-63fcf2d9b74e","type":"Title"},"tool_events":{"id":"17ee2c7e-7a22-48b0-b385-6c2dbf1fdd96","type":"ToolEvents"},"toolbar":{"id":"283c86f8-d7e2-4952-9c04-24406c17565d","type":"Toolbar"},"x_range":{"id":"4d99c218-e72e-406c-94f8-60c6c4c91d3b","type":"DataRange1d"},"y_range":{"id":"7a24d791-6680-4931-98cf-b53acf076cb0","type":"DataRange1d"}},"id":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"4d99c218-e72e-406c-94f8-60c6c4c91d3b","type":"DataRange1d"},{"attributes":{"plot":{"id":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"6abeb3cc-233e-422b-9488-0a7627e174db","type":"BasicTicker"}},"id":"e96cc342-ba12-4858-bab0-6e7a94735abb","type":"Grid"},{"attributes":{"overlay":{"id":"1f1540ca-5148-4cdc-aa6b-f547612ebb38","type":"BoxAnnotation"},"plot":{"id":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2","subtype":"Figure","type":"Plot"}},"id":"579f88f9-c68f-4d5c-981d-1734240816de","type":"BoxZoomTool"},{"attributes":{},"id":"afd8d9b7-a9da-4d10-ae6c-3f13595d1620","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","line_color","fill_color"],"data":{"fill_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"line_color":["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","green","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"],"x":[1.4,1.4,1.3,1.5,1.4,1.7,1.4,1.5,1.4,1.5,1.5,1.6,1.4,1.1,1.2,1.5,1.3,1.4,1.7,1.5,1.7,1.5,1.0,1.7,1.9,1.6,1.6,1.5,1.4,1.6,1.6,1.5,1.5,1.4,1.5,1.2,1.3,1.4,1.3,1.5,1.3,1.3,1.3,1.6,1.9,1.4,1.6,1.4,1.5,1.4,4.7,4.5,4.9,4.0,4.6,4.5,4.7,3.3,4.6,3.9,3.5,4.2,4.0,4.7,3.6,4.4,4.5,4.1,4.5,3.9,4.8,4.0,4.9,4.7,4.3,4.4,4.8,5.0,4.5,3.5,3.8,3.7,3.9,5.1,4.5,4.5,4.7,4.4,4.1,4.0,4.4,4.6,4.0,3.3,4.2,4.2,4.2,4.3,3.0,4.1,6.0,5.1,5.9,5.6,5.8,6.6,4.5,6.3,5.8,6.1,5.1,5.3,5.5,5.0,5.1,5.3,5.5,6.7,6.9,5.0,5.7,4.9,6.7,4.9,5.7,6.0,4.8,4.9,5.6,5.8,6.1,6.4,5.6,5.1,5.6,6.1,5.6,5.5,4.8,5.4,5.6,5.1,5.1,5.9,5.7,5.2,5.0,5.2,5.4,5.1],"y":[0.2,0.2,0.2,0.2,0.2,0.4,0.3,0.2,0.2,0.1,0.2,0.2,0.1,0.1,0.2,0.4,0.4,0.3,0.3,0.3,0.2,0.4,0.2,0.5,0.2,0.2,0.4,0.2,0.2,0.2,0.2,0.4,0.1,0.2,0.2,0.2,0.2,0.1,0.2,0.2,0.3,0.3,0.2,0.6,0.4,0.3,0.2,0.2,0.2,0.2,1.4,1.5,1.5,1.3,1.5,1.3,1.6,1.0,1.3,1.4,1.0,1.5,1.0,1.4,1.3,1.4,1.5,1.0,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1.0,1.1,1.0,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1.0,1.3,1.2,1.3,1.3,1.1,1.3,2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2.0,1.9,2.1,2.0,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2.0,2.0,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2.0,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2.0,2.3,1.8]}},"id":"9fa68d9b-afe7-41c9-826d-f2bc73a4b2f8","type":"ColumnDataSource"},{"attributes":{},"id":"17ee2c7e-7a22-48b0-b385-6c2dbf1fdd96","type":"ToolEvents"},{"attributes":{"axis_label":"Petal Length","formatter":{"id":"afd8d9b7-a9da-4d10-ae6c-3f13595d1620","type":"BasicTickFormatter"},"plot":{"id":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"6abeb3cc-233e-422b-9488-0a7627e174db","type":"BasicTicker"}},"id":"58162130-cc7c-44de-9e91-801508924a32","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"d137dce1-f2ee-4d6e-ba47-e2e661acf7bf","type":"BasicTicker"}},"id":"dc557d9e-cb3b-4bb6-8f41-33ff145fd85d","type":"Grid"},{"attributes":{"plot":{"id":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2","subtype":"Figure","type":"Plot"}},"id":"e619db12-4fde-4ef9-88a8-040db93e0a53","type":"HelpTool"}],"root_ids":["983c7db1-ea6d-4620-b875-0f8fe0fc86c2"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"2fd2f9e4-e8e0-473b-b708-0ec74c7ee6a2","elementid":"33fc84a9-4599-4b33-a249-02f7bce3f15a","modelid":"983c7db1-ea6d-4620-b875-0f8fe0fc86c2"}];
              
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