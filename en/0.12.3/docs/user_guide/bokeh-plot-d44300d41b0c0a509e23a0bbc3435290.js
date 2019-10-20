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
      };var element = document.getElementById("b4857c52-7eed-42b7-a300-43ca9b400240");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b4857c52-7eed-42b7-a300-43ca9b400240' but no matching script tag was found. ")
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
                  var docs_json = {"553d3fb0-885d-4f5e-a439-3d1a7ed2db07":{"roots":{"references":[{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9c8024f4-ec78-4d9a-bdd4-96c3dd1de8ec","type":"Circle"},{"attributes":{},"id":"b1e54afa-1d16-4f80-a6f7-958f1562558a","type":"BasicTicker"},{"attributes":{"formatter":{"id":"61f4f727-f07f-4517-8194-5de3f9c3de4c","type":"BasicTickFormatter"},"plot":{"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e558a42-0ad2-4a66-9e19-e1fa00d38ebf","type":"BasicTicker"}},"id":"ca34b1c2-8495-43a3-a30b-017c4ae86fa2","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a32d4a00-4ca1-4c27-988b-11ee1708e665","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"}},"id":"0bbc06af-56ba-47b0-9a61-4dab9ce270ac","type":"HelpTool"},{"attributes":{"plot":null,"text":"Left Title"},"id":"3b9adeb2-9703-425f-aaf5-5b25487a8919","type":"Title"},{"attributes":{"formatter":{"id":"682d9b23-85ca-48ac-8289-0aafb9cc3eef","type":"BasicTickFormatter"},"plot":{"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1e54afa-1d16-4f80-a6f7-958f1562558a","type":"BasicTicker"}},"id":"d00ef780-1f98-4394-9ec6-d428ad1e44c1","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fd3f701a-820d-4ff1-be38-2c998998c3b1","type":"Circle"},{"attributes":{"plot":{"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"}},"id":"4bd17c0d-4f52-483c-9fd9-512110ba9999","type":"SaveTool"},{"attributes":{"callback":null},"id":"003a4ab0-7652-4348-a5a9-e1ccfed260db","type":"DataRange1d"},{"attributes":{"callback":null},"id":"2206a6e7-28dd-493a-a7b0-577a2214fdf9","type":"DataRange1d"},{"attributes":{"below":[{"id":"d00ef780-1f98-4394-9ec6-d428ad1e44c1","type":"LinearAxis"},{"id":"38ed1bff-035c-420b-a1db-e5ddbf04c47a","type":"Title"}],"left":[{"id":"ca34b1c2-8495-43a3-a30b-017c4ae86fa2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d00ef780-1f98-4394-9ec6-d428ad1e44c1","type":"LinearAxis"},{"id":"dd76d341-095a-4ebd-8557-48902c764537","type":"Grid"},{"id":"ca34b1c2-8495-43a3-a30b-017c4ae86fa2","type":"LinearAxis"},{"id":"41686f2a-b814-4d01-bd60-f17a7313ed76","type":"Grid"},{"id":"a32d4a00-4ca1-4c27-988b-11ee1708e665","type":"BoxAnnotation"},{"id":"211f7452-a49e-4e3c-b165-0e6a4ec85599","type":"GlyphRenderer"},{"id":"38ed1bff-035c-420b-a1db-e5ddbf04c47a","type":"Title"}],"title":{"id":"3b9adeb2-9703-425f-aaf5-5b25487a8919","type":"Title"},"title_location":"left","tool_events":{"id":"758539f1-3c85-408e-9070-c7164f34f1f3","type":"ToolEvents"},"toolbar":{"id":"7eedc3eb-5a8d-4728-ace7-b2871ed46f0e","type":"Toolbar"},"x_range":{"id":"2206a6e7-28dd-493a-a7b0-577a2214fdf9","type":"DataRange1d"},"y_range":{"id":"003a4ab0-7652-4348-a5a9-e1ccfed260db","type":"DataRange1d"}},"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"63e1fa26-57ec-4e3d-89b0-cd94ee9ad1e7","type":"ColumnDataSource"},"glyph":{"id":"fd3f701a-820d-4ff1-be38-2c998998c3b1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"9c8024f4-ec78-4d9a-bdd4-96c3dd1de8ec","type":"Circle"},"selection_glyph":null},"id":"211f7452-a49e-4e3c-b165-0e6a4ec85599","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0b6cf157-aac1-450f-b32f-2eecc6b8fc15","type":"PanTool"},{"id":"6b190ab3-df6d-4e3a-b672-67f498085631","type":"WheelZoomTool"},{"id":"a36f1d16-7fa7-4d3b-a8e5-c8649a9ce905","type":"BoxZoomTool"},{"id":"4bd17c0d-4f52-483c-9fd9-512110ba9999","type":"SaveTool"},{"id":"a4c37351-7dbe-477b-8351-d36e6137d51a","type":"ResetTool"},{"id":"0bbc06af-56ba-47b0-9a61-4dab9ce270ac","type":"HelpTool"}]},"id":"7eedc3eb-5a8d-4728-ace7-b2871ed46f0e","type":"Toolbar"},{"attributes":{"overlay":{"id":"a32d4a00-4ca1-4c27-988b-11ee1708e665","type":"BoxAnnotation"},"plot":{"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"}},"id":"a36f1d16-7fa7-4d3b-a8e5-c8649a9ce905","type":"BoxZoomTool"},{"attributes":{},"id":"61f4f727-f07f-4517-8194-5de3f9c3de4c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"63e1fa26-57ec-4e3d-89b0-cd94ee9ad1e7","type":"ColumnDataSource"},{"attributes":{},"id":"758539f1-3c85-408e-9070-c7164f34f1f3","type":"ToolEvents"},{"attributes":{"plot":{"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"}},"id":"6b190ab3-df6d-4e3a-b672-67f498085631","type":"WheelZoomTool"},{"attributes":{"align":"center","plot":{"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"},"text":"Bottom Centered Title"},"id":"38ed1bff-035c-420b-a1db-e5ddbf04c47a","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"},"ticker":{"id":"4e558a42-0ad2-4a66-9e19-e1fa00d38ebf","type":"BasicTicker"}},"id":"41686f2a-b814-4d01-bd60-f17a7313ed76","type":"Grid"},{"attributes":{"plot":{"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"}},"id":"a4c37351-7dbe-477b-8351-d36e6137d51a","type":"ResetTool"},{"attributes":{},"id":"4e558a42-0ad2-4a66-9e19-e1fa00d38ebf","type":"BasicTicker"},{"attributes":{"plot":{"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"}},"id":"0b6cf157-aac1-450f-b32f-2eecc6b8fc15","type":"PanTool"},{"attributes":{},"id":"682d9b23-85ca-48ac-8289-0aafb9cc3eef","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"de905b6e-3790-4a13-b02f-f2c63b045946","subtype":"Figure","type":"Plot"},"ticker":{"id":"b1e54afa-1d16-4f80-a6f7-958f1562558a","type":"BasicTicker"}},"id":"dd76d341-095a-4ebd-8557-48902c764537","type":"Grid"}],"root_ids":["de905b6e-3790-4a13-b02f-f2c63b045946"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"553d3fb0-885d-4f5e-a439-3d1a7ed2db07","elementid":"b4857c52-7eed-42b7-a300-43ca9b400240","modelid":"de905b6e-3790-4a13-b02f-f2c63b045946"}];
                  
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