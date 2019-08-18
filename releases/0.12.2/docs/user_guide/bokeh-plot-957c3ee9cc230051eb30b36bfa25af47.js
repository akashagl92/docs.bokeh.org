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
      };var element = document.getElementById("c4a49cd1-e946-453b-ad75-ce87350faa75");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c4a49cd1-e946-453b-ad75-ce87350faa75' but no matching script tag was found. ")
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
                  var docs_json = {"47b0ffcd-cab9-4a1b-9a5b-9d55bed6d316":{"roots":{"references":[{"attributes":{"level":"glyph","plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"},"source":{"id":"abe5972c-58e4-4589-8564-f3efea769310","type":"ColumnDataSource"},"text":{"field":"names"},"x":{"field":"weight"},"x_offset":{"value":5},"y":{"field":"height"},"y_offset":{"value":5}},"id":"db145ce4-8a17-435e-b4f0-f9b0fba6d24d","type":"LabelSet"},{"attributes":{"plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"}},"id":"1ae79bbd-2659-498c-87c1-98c1bd4902d3","type":"SaveTool"},{"attributes":{},"id":"c1aa8c8c-aa36-4ecc-9328-3e4cd178a438","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"}},"id":"a471b54d-46c4-4696-88aa-893c00cf80e0","type":"ResetTool"},{"attributes":{"below":[{"id":"c93a1719-638c-47b7-9736-b2a8da08864d","type":"LinearAxis"}],"left":[{"id":"f41fca82-5089-40be-bfbf-91edc967011c","type":"LinearAxis"}],"renderers":[{"id":"c93a1719-638c-47b7-9736-b2a8da08864d","type":"LinearAxis"},{"id":"409e90cd-78e0-4098-9c5d-e7698e565775","type":"Grid"},{"id":"f41fca82-5089-40be-bfbf-91edc967011c","type":"LinearAxis"},{"id":"1d624f84-0d56-49b5-a32f-984e62c06f8f","type":"Grid"},{"id":"7d51fc70-8ea7-4f07-a13a-85310bf2467f","type":"BoxAnnotation"},{"id":"19adafcf-19b0-4c36-bbef-fe2fbe6a9b35","type":"GlyphRenderer"},{"id":"db145ce4-8a17-435e-b4f0-f9b0fba6d24d","type":"LabelSet"},{"id":"01971b71-ab98-47e6-864d-95b48c8efb69","type":"Label"}],"title":{"id":"3c5e08ac-b929-4b6d-b41e-c20e8d898635","type":"Title"},"tool_events":{"id":"3d2d987b-792d-402b-a7eb-9baab0cef7dd","type":"ToolEvents"},"toolbar":{"id":"3e079782-4b40-4ac2-a0e1-19d5f00b663f","type":"Toolbar"},"x_range":{"id":"b85bb29c-e746-442e-b118-5588d2098fe6","type":"Range1d"},"y_range":{"id":"6d702fb8-0a59-480b-a94a-cd02b6f64977","type":"DataRange1d"}},"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":275,"start":140},"id":"b85bb29c-e746-442e-b118-5588d2098fe6","type":"Range1d"},{"attributes":{"plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"}},"id":"5c42ad55-e015-48b5-902f-d45e116580d3","type":"WheelZoomTool"},{"attributes":{},"id":"3d2d987b-792d-402b-a7eb-9baab0cef7dd","type":"ToolEvents"},{"attributes":{"axis_label":"Height (in)","formatter":{"id":"c1aa8c8c-aa36-4ecc-9328-3e4cd178a438","type":"BasicTickFormatter"},"plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"},"ticker":{"id":"77f39e51-a4d4-485d-abfa-3a600c2bb19f","type":"BasicTicker"}},"id":"f41fca82-5089-40be-bfbf-91edc967011c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["names","weight","height"],"data":{"height":[66,71,72,68,58,62],"names":["Mark","Amir","Matt","Greg","Owen","Juan"],"weight":[165,189,220,141,260,174]}},"id":"abe5972c-58e4-4589-8564-f3efea769310","type":"ColumnDataSource"},{"attributes":{},"id":"77f39e51-a4d4-485d-abfa-3a600c2bb19f","type":"BasicTicker"},{"attributes":{},"id":"e945fea1-8845-407f-920f-57f6a43c598c","type":"BasicTicker"},{"attributes":{"plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"}},"id":"72060194-c7df-4abc-abd4-a0b594d2b18c","type":"PanTool"},{"attributes":{"plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"},"ticker":{"id":"e945fea1-8845-407f-920f-57f6a43c598c","type":"BasicTicker"}},"id":"409e90cd-78e0-4098-9c5d-e7698e565775","type":"Grid"},{"attributes":{"plot":null,"text":"Dist. of 10th Grade Students at Lee High"},"id":"3c5e08ac-b929-4b6d-b41e-c20e8d898635","type":"Title"},{"attributes":{"axis_label":"Weight (lbs)","formatter":{"id":"2b056988-a78f-4954-b13b-6e68045e0ffc","type":"BasicTickFormatter"},"plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"},"ticker":{"id":"e945fea1-8845-407f-920f-57f6a43c598c","type":"BasicTicker"}},"id":"c93a1719-638c-47b7-9736-b2a8da08864d","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"1a749edc-51ab-47fa-b7c4-c43543f36f94","type":"Circle"},{"attributes":{"data_source":{"id":"abe5972c-58e4-4589-8564-f3efea769310","type":"ColumnDataSource"},"glyph":{"id":"bb1ec348-b92a-4889-9519-f50ecf064dc1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"1a749edc-51ab-47fa-b7c4-c43543f36f94","type":"Circle"},"selection_glyph":null},"id":"19adafcf-19b0-4c36-bbef-fe2fbe6a9b35","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"},"ticker":{"id":"77f39e51-a4d4-485d-abfa-3a600c2bb19f","type":"BasicTicker"}},"id":"1d624f84-0d56-49b5-a32f-984e62c06f8f","type":"Grid"},{"attributes":{},"id":"2b056988-a78f-4954-b13b-6e68045e0ffc","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6d702fb8-0a59-480b-a94a-cd02b6f64977","type":"DataRange1d"},{"attributes":{"plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"}},"id":"ef3b568a-4650-4977-b012-b7744c5da7ba","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"72060194-c7df-4abc-abd4-a0b594d2b18c","type":"PanTool"},{"id":"5c42ad55-e015-48b5-902f-d45e116580d3","type":"WheelZoomTool"},{"id":"e4c0cee7-480f-47bf-ad25-d51f5ceeee39","type":"BoxZoomTool"},{"id":"1ae79bbd-2659-498c-87c1-98c1bd4902d3","type":"SaveTool"},{"id":"a471b54d-46c4-4696-88aa-893c00cf80e0","type":"ResetTool"},{"id":"ef3b568a-4650-4977-b012-b7744c5da7ba","type":"HelpTool"}]},"id":"3e079782-4b40-4ac2-a0e1-19d5f00b663f","type":"Toolbar"},{"attributes":{"background_fill_color":{"value":"white"},"border_line_color":{"value":"black"},"plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"},"render_mode":"css","text":"Collected by Luke C. 2016-04-01","x":70,"x_units":"screen","y":70,"y_units":"screen"},"id":"01971b71-ab98-47e6-864d-95b48c8efb69","type":"Label"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7d51fc70-8ea7-4f07-a13a-85310bf2467f","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"weight"},"y":{"field":"height"}},"id":"bb1ec348-b92a-4889-9519-f50ecf064dc1","type":"Circle"},{"attributes":{"overlay":{"id":"7d51fc70-8ea7-4f07-a13a-85310bf2467f","type":"BoxAnnotation"},"plot":{"id":"21e3c968-6e77-45ca-8af5-be3fe15b3f09","subtype":"Figure","type":"Plot"}},"id":"e4c0cee7-480f-47bf-ad25-d51f5ceeee39","type":"BoxZoomTool"}],"root_ids":["21e3c968-6e77-45ca-8af5-be3fe15b3f09"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"47b0ffcd-cab9-4a1b-9a5b-9d55bed6d316","elementid":"c4a49cd1-e946-453b-ad75-ce87350faa75","modelid":"21e3c968-6e77-45ca-8af5-be3fe15b3f09"}];
                  
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