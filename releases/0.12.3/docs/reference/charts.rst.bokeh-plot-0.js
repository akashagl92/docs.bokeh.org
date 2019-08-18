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
      };var element = document.getElementById("ebb5d116-61ea-445d-86e5-04a896d42d9f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ebb5d116-61ea-445d-86e5-04a896d42d9f' but no matching script tag was found. ")
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
                  var docs_json = {"b3cdb001-ea32-4c01-ae03-778393b7ce94":{"roots":{"references":[{"attributes":{"overlay":{"id":"e915c4af-0ed4-45b0-9ee1-6d127853d038","type":"BoxAnnotation"},"plot":{"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"}},"id":"2d3aff9e-3504-4f99-b44f-da3f3eaa160a","type":"BoxZoomTool"},{"attributes":{},"id":"407d8e1f-fc6f-4f26-952c-0f88025ebad5","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"057f2ecd-b3d2-4034-b0d3-7d756a087cc8","type":"Patches"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"python"}],"series":["python"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,2.0,3.0,7.0,5.0,26.0,221.0,44.0,233.0,254.0,265.0,266.0,267.0,120.0,111.0,0.0]]}},"id":"a4312ad6-ba6d-4e7a-95f8-ac7d34feeda8","type":"ColumnDataSource"},{"attributes":{"label":{"value":"jython"},"renderers":[{"id":"6981e7cf-7513-4a22-b57d-cfcbb9db2f1e","type":"GlyphRenderer"}]},"id":"e78a5813-37d4-42ed-b715-eb8cf59a647a","type":"LegendItem"},{"attributes":{"plot":{"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"}},"id":"b7db0814-686c-42b4-8bb6-1b1a846745f0","type":"ResetTool"},{"attributes":{},"id":"bbf3daa1-b4e2-469d-8c3f-314d969aa944","type":"ToolEvents"},{"attributes":{"callback":null,"end":293.7,"start":-26.700000000000003},"id":"810c42c2-924a-41a1-afa4-b745dccd1d74","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"5f229c98-f6f7-453f-a411-a6e7189925cf","type":"Patches"},{"attributes":{},"id":"2ed67e9b-ae17-4a97-93c4-a869cf087ee4","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"pypy"},"renderers":[{"id":"0ae56203-44d7-4cf6-b645-b88366ae391b","type":"GlyphRenderer"}]},"id":"7436a932-4ac3-4612-b0fe-a2dc5d1ff5a0","type":"LegendItem"},{"attributes":{"label":{"value":"python"},"renderers":[{"id":"f4f5fd95-35ff-4fca-b5c0-eb02c7cc1bad","type":"GlyphRenderer"}]},"id":"2174e58f-05d6-489c-a44f-8a447f9e5178","type":"LegendItem"},{"attributes":{"plot":{"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"},"ticker":{"id":"c9579fe7-2bc1-4e05-8b77-4656d3134fa8","type":"BasicTicker"}},"id":"fd63bede-d783-481c-8207-27c28be39635","type":"Grid"},{"attributes":{"data_source":{"id":"0e3f676f-9bf4-4c58-af5e-fb30de2240da","type":"ColumnDataSource"},"glyph":{"id":"10a7245b-26ed-4651-ad55-f7a2c7b10234","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6981e7cf-7513-4a22-b57d-cfcbb9db2f1e","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"500a9a37-072c-4392-8c06-6588212682b8","type":"PanTool"},{"id":"4daf6177-b547-4b5c-a8e5-be4fe1b485a7","type":"WheelZoomTool"},{"id":"2d3aff9e-3504-4f99-b44f-da3f3eaa160a","type":"BoxZoomTool"},{"id":"3ece7bdf-4b72-43b1-a120-8dcdda70a623","type":"SaveTool"},{"id":"b7db0814-686c-42b4-8bb6-1b1a846745f0","type":"ResetTool"},{"id":"4d851255-c667-4363-869c-2c03597f5728","type":"HelpTool"}]},"id":"d35bf03d-4959-46ab-add1-b927b06ca231","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"pypy"}],"series":["pypy"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,12.0,33.0,47.0,15.0,126.0,121.0,144.0,233.0,254.0,225.0,226.0,267.0,110.0,130.0,0.0]]}},"id":"78a5d2f6-92ec-4d26-90bc-a3dd55b2691e","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"}},"id":"4d851255-c667-4363-869c-2c03597f5728","type":"HelpTool"},{"attributes":{"plot":{"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"}},"id":"3ece7bdf-4b72-43b1-a120-8dcdda70a623","type":"SaveTool"},{"attributes":{"axis_label":"memory","formatter":{"id":"2ed67e9b-ae17-4a97-93c4-a869cf087ee4","type":"BasicTickFormatter"},"plot":{"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"},"ticker":{"id":"04d48a61-5603-4974-b58b-cd593e9d6657","type":"BasicTicker"}},"id":"2a55faeb-20fb-4361-8138-0a91afdd8e62","type":"LinearAxis"},{"attributes":{},"id":"04d48a61-5603-4974-b58b-cd593e9d6657","type":"BasicTicker"},{"attributes":{"items":[{"id":"e78a5813-37d4-42ed-b715-eb8cf59a647a","type":"LegendItem"},{"id":"7436a932-4ac3-4612-b0fe-a2dc5d1ff5a0","type":"LegendItem"},{"id":"2174e58f-05d6-489c-a44f-8a447f9e5178","type":"LegendItem"}],"location":"top_left","plot":{"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"}},"id":"7c71f373-a8e5-4ab2-9070-8ff63a0aa89e","type":"Legend"},{"attributes":{"below":[{"id":"b426170a-08e1-45f6-808f-1f0005f2c752","type":"LinearAxis"}],"height":400,"left":[{"id":"2a55faeb-20fb-4361-8138-0a91afdd8e62","type":"LinearAxis"}],"renderers":[{"id":"e915c4af-0ed4-45b0-9ee1-6d127853d038","type":"BoxAnnotation"},{"id":"6981e7cf-7513-4a22-b57d-cfcbb9db2f1e","type":"GlyphRenderer"},{"id":"0ae56203-44d7-4cf6-b645-b88366ae391b","type":"GlyphRenderer"},{"id":"f4f5fd95-35ff-4fca-b5c0-eb02c7cc1bad","type":"GlyphRenderer"},{"id":"7c71f373-a8e5-4ab2-9070-8ff63a0aa89e","type":"Legend"},{"id":"b426170a-08e1-45f6-808f-1f0005f2c752","type":"LinearAxis"},{"id":"2a55faeb-20fb-4361-8138-0a91afdd8e62","type":"LinearAxis"},{"id":"fd63bede-d783-481c-8207-27c28be39635","type":"Grid"},{"id":"4c750bb3-9eef-44e6-967b-01d8dd3ccafd","type":"Grid"}],"title":{"id":"11d59117-783e-4951-ad5b-040ae52615bb","type":"Title"},"tool_events":{"id":"bbf3daa1-b4e2-469d-8c3f-314d969aa944","type":"ToolEvents"},"toolbar":{"id":"d35bf03d-4959-46ab-add1-b927b06ca231","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"706a55a5-8fed-4019-83fd-f660986e5c5e","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"810c42c2-924a-41a1-afa4-b745dccd1d74","type":"Range1d"}},"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"}},"id":"4daf6177-b547-4b5c-a8e5-be4fe1b485a7","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"},"ticker":{"id":"04d48a61-5603-4974-b58b-cd593e9d6657","type":"BasicTicker"}},"id":"4c750bb3-9eef-44e6-967b-01d8dd3ccafd","type":"Grid"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"series":"jython"}],"series":["jython"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,22.0,43.0,10.0,25.0,26.0,101.0,114.0,203.0,194.0,215.0,201.0,227.0,139.0,160.0,0.0]]}},"id":"0e3f676f-9bf4-4c58-af5e-fb30de2240da","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a4312ad6-ba6d-4e7a-95f8-ac7d34feeda8","type":"ColumnDataSource"},"glyph":{"id":"057f2ecd-b3d2-4034-b0d3-7d756a087cc8","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f4f5fd95-35ff-4fca-b5c0-eb02c7cc1bad","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"}},"id":"500a9a37-072c-4392-8c06-6588212682b8","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e915c4af-0ed4-45b0-9ee1-6d127853d038","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"10a7245b-26ed-4651-ad55-f7a2c7b10234","type":"Patches"},{"attributes":{"plot":null,"text":"Area Chart"},"id":"11d59117-783e-4951-ad5b-040ae52615bb","type":"Title"},{"attributes":{"data_source":{"id":"78a5d2f6-92ec-4d26-90bc-a3dd55b2691e","type":"ColumnDataSource"},"glyph":{"id":"5f229c98-f6f7-453f-a411-a6e7189925cf","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"0ae56203-44d7-4cf6-b645-b88366ae391b","type":"GlyphRenderer"},{"attributes":{},"id":"c9579fe7-2bc1-4e05-8b77-4656d3134fa8","type":"BasicTicker"},{"attributes":{"axis_label":"time","formatter":{"id":"407d8e1f-fc6f-4f26-952c-0f88025ebad5","type":"BasicTickFormatter"},"plot":{"id":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4","subtype":"Chart","type":"Plot"},"ticker":{"id":"c9579fe7-2bc1-4e05-8b77-4656d3134fa8","type":"BasicTicker"}},"id":"b426170a-08e1-45f6-808f-1f0005f2c752","type":"LinearAxis"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"706a55a5-8fed-4019-83fd-f660986e5c5e","type":"Range1d"}],"root_ids":["134d5ae4-5180-4fda-8029-0ce1da9d1dc4"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"b3cdb001-ea32-4c01-ae03-778393b7ce94","elementid":"ebb5d116-61ea-445d-86e5-04a896d42d9f","modelid":"134d5ae4-5180-4fda-8029-0ce1da9d1dc4"}];
                  
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