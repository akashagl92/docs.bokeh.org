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
      };var element = document.getElementById("a7db7554-f117-4c8e-82f6-c14c4d4278f2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a7db7554-f117-4c8e-82f6-c14c4d4278f2' but no matching script tag was found. ")
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
                  var docs_json = {"add7749c-0476-457f-ba36-7a01bd9b8821":{"roots":{"references":[{"attributes":{},"id":"d0566177-9330-4ca8-8eae-7c1609b40055","type":"BasicTicker"},{"attributes":{"callback":null},"id":"0d158566-da59-4d8f-84af-735031909a56","type":"DataRange1d"},{"attributes":{"plot":{"id":"948ab762-38fa-44ec-a065-7e7fa57b60b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0566177-9330-4ca8-8eae-7c1609b40055","type":"BasicTicker"}},"id":"805fe3c6-df98-4d29-b4e9-7a09cfb05815","type":"Grid"},{"attributes":{},"id":"b537cc78-96d7-4fcf-8dda-6e915b8bc057","type":"BasicTicker"},{"attributes":{"plot":{"id":"948ab762-38fa-44ec-a065-7e7fa57b60b7","subtype":"Figure","type":"Plot"}},"id":"9f235a2e-5287-48ab-bdeb-ce3a75e0c756","type":"ResetTool"},{"attributes":{"below":[{"id":"8965ca55-8238-4c5f-942d-6ec84960c2db","type":"LinearAxis"}],"left":[{"id":"d7db257b-a4ad-436d-b75b-c4c1071f24d5","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"8965ca55-8238-4c5f-942d-6ec84960c2db","type":"LinearAxis"},{"id":"805fe3c6-df98-4d29-b4e9-7a09cfb05815","type":"Grid"},{"id":"d7db257b-a4ad-436d-b75b-c4c1071f24d5","type":"LinearAxis"},{"id":"9bdb3e21-d879-4011-9421-e156f816e33f","type":"Grid"},{"id":"424985c3-c513-48c5-870a-d9064cc5bb3e","type":"BoxAnnotation"},{"id":"1cd48e17-63e6-4bed-93b1-d13aa4743153","type":"GlyphRenderer"}],"title":{"id":"41ccf4b1-a7c7-4d80-9415-2dee6013869e","type":"Title"},"tool_events":{"id":"1047023b-3379-471c-83b2-576a0f9ec0bc","type":"ToolEvents"},"toolbar":{"id":"caba3303-e0e8-474a-80f6-e0810b8648ac","type":"Toolbar"},"x_range":{"id":"801e8c05-a370-494b-929f-fc683850df9f","type":"DataRange1d"},"y_range":{"id":"0d158566-da59-4d8f-84af-735031909a56","type":"DataRange1d"}},"id":"948ab762-38fa-44ec-a065-7e7fa57b60b7","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":null},"id":"41ccf4b1-a7c7-4d80-9415-2dee6013869e","type":"Title"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"feedf1bb-0215-468d-80cb-5f45cfcbea6f","type":"Quad"},{"attributes":{"formatter":{"id":"f4242cf0-caa2-4c75-90a5-5fd52b3d2bea","type":"BasicTickFormatter"},"plot":{"id":"948ab762-38fa-44ec-a065-7e7fa57b60b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0566177-9330-4ca8-8eae-7c1609b40055","type":"BasicTicker"}},"id":"8965ca55-8238-4c5f-942d-6ec84960c2db","type":"LinearAxis"},{"attributes":{},"id":"1047023b-3379-471c-83b2-576a0f9ec0bc","type":"ToolEvents"},{"attributes":{"plot":{"id":"948ab762-38fa-44ec-a065-7e7fa57b60b7","subtype":"Figure","type":"Plot"}},"id":"84b343f6-d148-4367-a15a-57a1e0722c47","type":"PanTool"},{"attributes":{"plot":{"id":"948ab762-38fa-44ec-a065-7e7fa57b60b7","subtype":"Figure","type":"Plot"}},"id":"0b4c4b08-7dc8-49ed-a786-1e5d5b46a139","type":"SaveTool"},{"attributes":{},"id":"7c0c92b6-086c-42ad-b3ca-cef0b2fef55a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"9f647e79-996e-44ed-a8e0-a04ce3c72af6","type":"ColumnDataSource"},"glyph":{"id":"bcc4c1ec-c09d-40df-8371-ec9a2cfdf0bb","type":"Quad"},"hover_glyph":null,"nonselection_glyph":{"id":"feedf1bb-0215-468d-80cb-5f45cfcbea6f","type":"Quad"},"selection_glyph":null},"id":"1cd48e17-63e6-4bed-93b1-d13aa4743153","type":"GlyphRenderer"},{"attributes":{},"id":"f4242cf0-caa2-4c75-90a5-5fd52b3d2bea","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["top","left","right","bottom"],"data":{"bottom":[1,2,3],"left":[1,2,3],"right":[1.2,2.5,3.7],"top":[2,3,4]}},"id":"9f647e79-996e-44ed-a8e0-a04ce3c72af6","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"948ab762-38fa-44ec-a065-7e7fa57b60b7","subtype":"Figure","type":"Plot"}},"id":"8cd47104-4650-49ec-9561-d345052869fe","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"424985c3-c513-48c5-870a-d9064cc5bb3e","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"7c0c92b6-086c-42ad-b3ca-cef0b2fef55a","type":"BasicTickFormatter"},"plot":{"id":"948ab762-38fa-44ec-a065-7e7fa57b60b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"b537cc78-96d7-4fcf-8dda-6e915b8bc057","type":"BasicTicker"}},"id":"d7db257b-a4ad-436d-b75b-c4c1071f24d5","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"948ab762-38fa-44ec-a065-7e7fa57b60b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"b537cc78-96d7-4fcf-8dda-6e915b8bc057","type":"BasicTicker"}},"id":"9bdb3e21-d879-4011-9421-e156f816e33f","type":"Grid"},{"attributes":{"callback":null},"id":"801e8c05-a370-494b-929f-fc683850df9f","type":"DataRange1d"},{"attributes":{"plot":{"id":"948ab762-38fa-44ec-a065-7e7fa57b60b7","subtype":"Figure","type":"Plot"}},"id":"a3df473b-f68d-4332-8292-9d3a1efcd840","type":"HelpTool"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#B3DE69"},"left":{"field":"left"},"line_color":{"value":"#B3DE69"},"right":{"field":"right"},"top":{"field":"top"}},"id":"bcc4c1ec-c09d-40df-8371-ec9a2cfdf0bb","type":"Quad"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"84b343f6-d148-4367-a15a-57a1e0722c47","type":"PanTool"},{"id":"8cd47104-4650-49ec-9561-d345052869fe","type":"WheelZoomTool"},{"id":"61c01ceb-57bd-4846-bc71-6ba8ac2221f1","type":"BoxZoomTool"},{"id":"0b4c4b08-7dc8-49ed-a786-1e5d5b46a139","type":"SaveTool"},{"id":"9f235a2e-5287-48ab-bdeb-ce3a75e0c756","type":"ResetTool"},{"id":"a3df473b-f68d-4332-8292-9d3a1efcd840","type":"HelpTool"}]},"id":"caba3303-e0e8-474a-80f6-e0810b8648ac","type":"Toolbar"},{"attributes":{"overlay":{"id":"424985c3-c513-48c5-870a-d9064cc5bb3e","type":"BoxAnnotation"},"plot":{"id":"948ab762-38fa-44ec-a065-7e7fa57b60b7","subtype":"Figure","type":"Plot"}},"id":"61c01ceb-57bd-4846-bc71-6ba8ac2221f1","type":"BoxZoomTool"}],"root_ids":["948ab762-38fa-44ec-a065-7e7fa57b60b7"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"add7749c-0476-457f-ba36-7a01bd9b8821","elementid":"a7db7554-f117-4c8e-82f6-c14c4d4278f2","modelid":"948ab762-38fa-44ec-a065-7e7fa57b60b7"}];
                  
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