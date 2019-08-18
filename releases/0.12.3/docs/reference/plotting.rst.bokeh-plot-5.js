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
      };var element = document.getElementById("86c0daf7-2cdd-4806-b45d-b03ce172b1d9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '86c0daf7-2cdd-4806-b45d-b03ce172b1d9' but no matching script tag was found. ")
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
                  var docs_json = {"d71c076c-e069-413c-8d26-9580727102e7":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f121d905-190a-4e75-a567-20a05e7d91a1","type":"PanTool"},{"id":"a1393a01-c50d-4f27-a344-39508aeccb81","type":"WheelZoomTool"},{"id":"960be8ab-5364-47aa-ba61-4e6739e7c734","type":"BoxZoomTool"},{"id":"e8bec47c-a896-4c66-a003-87bd9a5a0b5f","type":"SaveTool"},{"id":"4ece82f6-7687-403a-89ac-3fa57284d19c","type":"ResetTool"},{"id":"a0bdfcdd-247f-4f19-af36-ab7f758ae829","type":"HelpTool"}]},"id":"0d8ea324-6be6-4dea-9b04-e303a1942e30","type":"Toolbar"},{"attributes":{"callback":null},"id":"390c9bb6-d0e3-42b4-a0ec-be54373cad62","type":"DataRange1d"},{"attributes":{"data_source":{"id":"d6ea7e97-0305-4166-8df3-ba1614f1ed29","type":"ColumnDataSource"},"glyph":{"id":"c990ef75-fb6e-43c7-94e7-4f7017759f97","type":"Cross"},"hover_glyph":null,"nonselection_glyph":{"id":"26043a00-c2b1-4fa2-992b-f7c923206480","type":"Cross"},"selection_glyph":null},"id":"a0058b91-4872-4601-90ad-2f3989a309d5","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"7051cfad-009f-4b87-a33a-2370d11f26af","subtype":"Figure","type":"Plot"}},"id":"f121d905-190a-4e75-a567-20a05e7d91a1","type":"PanTool"},{"attributes":{"plot":{"id":"7051cfad-009f-4b87-a33a-2370d11f26af","subtype":"Figure","type":"Plot"}},"id":"a1393a01-c50d-4f27-a344-39508aeccb81","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"7051cfad-009f-4b87-a33a-2370d11f26af","subtype":"Figure","type":"Plot"}},"id":"a0bdfcdd-247f-4f19-af36-ab7f758ae829","type":"HelpTool"},{"attributes":{},"id":"aab545a9-b5d6-472c-b118-565ab727162c","type":"ToolEvents"},{"attributes":{"callback":null},"id":"fcd72004-948e-406c-abe3-7f3f92244319","type":"DataRange1d"},{"attributes":{"formatter":{"id":"c776aeb5-0869-4ff6-b784-e1f53afab17f","type":"BasicTickFormatter"},"plot":{"id":"7051cfad-009f-4b87-a33a-2370d11f26af","subtype":"Figure","type":"Plot"},"ticker":{"id":"b77938fb-96eb-439b-989c-8e56cb41b752","type":"BasicTicker"}},"id":"37c68c7e-c6f5-4f96-ab54-2117838a95be","type":"LinearAxis"},{"attributes":{"plot":{"id":"7051cfad-009f-4b87-a33a-2370d11f26af","subtype":"Figure","type":"Plot"}},"id":"e8bec47c-a896-4c66-a003-87bd9a5a0b5f","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1a6cddd8-ba6b-4ece-8b37-7a98cf983608","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"26043a00-c2b1-4fa2-992b-f7c923206480","type":"Cross"},{"attributes":{"dimension":1,"plot":{"id":"7051cfad-009f-4b87-a33a-2370d11f26af","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a45ded3-c40a-429b-9f63-c0a43a0fb347","type":"BasicTicker"}},"id":"5e083d1f-9487-4a97-a7b8-a4efd1ae20b5","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"d6ea7e97-0305-4166-8df3-ba1614f1ed29","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"7051cfad-009f-4b87-a33a-2370d11f26af","subtype":"Figure","type":"Plot"},"ticker":{"id":"b77938fb-96eb-439b-989c-8e56cb41b752","type":"BasicTicker"}},"id":"a75145b4-bcf0-4f04-a037-c5b3d45002d2","type":"Grid"},{"attributes":{"overlay":{"id":"1a6cddd8-ba6b-4ece-8b37-7a98cf983608","type":"BoxAnnotation"},"plot":{"id":"7051cfad-009f-4b87-a33a-2370d11f26af","subtype":"Figure","type":"Plot"}},"id":"960be8ab-5364-47aa-ba61-4e6739e7c734","type":"BoxZoomTool"},{"attributes":{},"id":"b77938fb-96eb-439b-989c-8e56cb41b752","type":"BasicTicker"},{"attributes":{},"id":"4a45ded3-c40a-429b-9f63-c0a43a0fb347","type":"BasicTicker"},{"attributes":{"below":[{"id":"37c68c7e-c6f5-4f96-ab54-2117838a95be","type":"LinearAxis"}],"left":[{"id":"1eb2850e-60d8-4943-9812-ab8005c4e29a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"37c68c7e-c6f5-4f96-ab54-2117838a95be","type":"LinearAxis"},{"id":"a75145b4-bcf0-4f04-a037-c5b3d45002d2","type":"Grid"},{"id":"1eb2850e-60d8-4943-9812-ab8005c4e29a","type":"LinearAxis"},{"id":"5e083d1f-9487-4a97-a7b8-a4efd1ae20b5","type":"Grid"},{"id":"1a6cddd8-ba6b-4ece-8b37-7a98cf983608","type":"BoxAnnotation"},{"id":"a0058b91-4872-4601-90ad-2f3989a309d5","type":"GlyphRenderer"}],"title":{"id":"ae60c47b-8e4b-41a8-b1a9-b819efe4b39d","type":"Title"},"tool_events":{"id":"aab545a9-b5d6-472c-b118-565ab727162c","type":"ToolEvents"},"toolbar":{"id":"0d8ea324-6be6-4dea-9b04-e303a1942e30","type":"Toolbar"},"x_range":{"id":"fcd72004-948e-406c-abe3-7f3f92244319","type":"DataRange1d"},"y_range":{"id":"390c9bb6-d0e3-42b4-a0ec-be54373cad62","type":"DataRange1d"}},"id":"7051cfad-009f-4b87-a33a-2370d11f26af","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"c776aeb5-0869-4ff6-b784-e1f53afab17f","type":"BasicTickFormatter"},{"attributes":{},"id":"2aa9cae5-4a03-4620-904c-79d66616ed9a","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#E6550D"},"line_color":{"value":"#E6550D"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"c990ef75-fb6e-43c7-94e7-4f7017759f97","type":"Cross"},{"attributes":{"formatter":{"id":"2aa9cae5-4a03-4620-904c-79d66616ed9a","type":"BasicTickFormatter"},"plot":{"id":"7051cfad-009f-4b87-a33a-2370d11f26af","subtype":"Figure","type":"Plot"},"ticker":{"id":"4a45ded3-c40a-429b-9f63-c0a43a0fb347","type":"BasicTicker"}},"id":"1eb2850e-60d8-4943-9812-ab8005c4e29a","type":"LinearAxis"},{"attributes":{"plot":{"id":"7051cfad-009f-4b87-a33a-2370d11f26af","subtype":"Figure","type":"Plot"}},"id":"4ece82f6-7687-403a-89ac-3fa57284d19c","type":"ResetTool"},{"attributes":{"plot":null,"text":null},"id":"ae60c47b-8e4b-41a8-b1a9-b819efe4b39d","type":"Title"}],"root_ids":["7051cfad-009f-4b87-a33a-2370d11f26af"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"d71c076c-e069-413c-8d26-9580727102e7","elementid":"86c0daf7-2cdd-4806-b45d-b03ce172b1d9","modelid":"7051cfad-009f-4b87-a33a-2370d11f26af"}];
                  
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