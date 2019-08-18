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
      };var element = document.getElementById("ee8efbd3-5e40-4e67-a6e2-65ce44a4864f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ee8efbd3-5e40-4e67-a6e2-65ce44a4864f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"33043767-751e-4fe9-ba17-189c500458f4":{"roots":{"references":[{"attributes":{"plot":{"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"}},"id":"20477579-91b2-421d-96a4-c360b5d8c100","type":"PanTool"},{"attributes":{"plot":{"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"}},"id":"3025be41-6f0f-4247-b4c9-61172e85ceb2","type":"SaveTool"},{"attributes":{"callback":null,"end":2.74,"start":-0.13999999999999999},"id":"36c91619-72c5-40a9-a9cb-3ea4508f113b","type":"Range1d"},{"attributes":{"plot":null,"text":"Iris Dataset Color and Marker by Species"},"id":"bc865a11-282e-4905-8cb0-3304ccc6cefe","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"23c899d7-0d18-4ab5-b136-4bc5f9ef5f74","type":"BoxAnnotation"},{"attributes":{"axis_label":"petal_length","formatter":{"id":"ac01e2e1-724e-49f4-aa91-40aed92595b2","type":"BasicTickFormatter"},"plot":{"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"},"ticker":{"id":"31fd18d4-fbe2-4bf1-90e3-28b3c5b6d269","type":"BasicTicker"}},"id":"ae11f055-8fc1-4953-b8d8-c6b3b0530661","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"},"ticker":{"id":"84089ab3-3a74-47bd-8459-bad15849734d","type":"BasicTicker"}},"id":"19a96ca1-3a4e-4c6d-9a65-25f55aad0482","type":"Grid"},{"attributes":{"data_source":{"id":"23b88025-9368-41ad-9119-e125cfc6ae91","type":"ColumnDataSource"},"glyph":{"id":"b8f4abca-8e1a-49e7-b54a-0b3eb7b475a9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fcca5984-6cdb-42c6-a4c3-152f9be910da","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"dd57b74f-74f4-4191-bc88-f6b23df891fd","type":"ColumnDataSource"},"glyph":{"id":"1ba62ced-635b-4185-a42d-146a7aa22abd","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"44f87b13-6745-4e69-848b-5d732afe8445","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"ae11f055-8fc1-4953-b8d8-c6b3b0530661","type":"LinearAxis"}],"height":400,"left":[{"id":"1d14fcd4-66d3-41a1-ab8a-f63226bea6b9","type":"LinearAxis"}],"renderers":[{"id":"23c899d7-0d18-4ab5-b136-4bc5f9ef5f74","type":"BoxAnnotation"},{"id":"fcca5984-6cdb-42c6-a4c3-152f9be910da","type":"GlyphRenderer"},{"id":"44f87b13-6745-4e69-848b-5d732afe8445","type":"GlyphRenderer"},{"id":"efd4a73a-4088-4661-9677-3a1c1813c369","type":"GlyphRenderer"},{"id":"3ba83ffd-f561-4753-b2aa-df714954e41e","type":"Legend"},{"id":"ae11f055-8fc1-4953-b8d8-c6b3b0530661","type":"LinearAxis"},{"id":"1d14fcd4-66d3-41a1-ab8a-f63226bea6b9","type":"LinearAxis"},{"id":"14b27669-7027-40fe-b41a-e9fc35abefdd","type":"Grid"},{"id":"19a96ca1-3a4e-4c6d-9a65-25f55aad0482","type":"Grid"}],"title":{"id":"bc865a11-282e-4905-8cb0-3304ccc6cefe","type":"Title"},"tool_events":{"id":"06ba2aa7-5d10-4158-b8c8-c207d0eb3618","type":"ToolEvents"},"toolbar":{"id":"36da5984-eb98-46f9-9f28-73b2a44be004","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"91ce48af-9893-4dc9-82d0-67c079eae531","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"36c91619-72c5-40a9-a9cb-3ea4508f113b","type":"Range1d"}},"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"}],"species":["versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor"],"x_values":[4.7,4.5,4.9,4.0,4.6,4.5,4.7,3.3,4.6,3.9,3.5,4.2,4.0,4.7,3.6,4.4,4.5,4.1,4.5,3.9,4.8,4.0,4.9,4.7,4.3,4.4,4.8,5.0,4.5,3.5,3.8,3.7,3.9,5.1,4.5,4.5,4.7,4.4,4.1,4.0,4.4,4.6,4.0,3.3,4.2,4.2,4.2,4.3,3.0,4.1],"y_values":[1.4,1.5,1.5,1.3,1.5,1.3,1.6,1.0,1.3,1.4,1.0,1.5,1.0,1.4,1.3,1.4,1.5,1.0,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1.0,1.1,1.0,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1.0,1.3,1.2,1.3,1.3,1.1,1.3]}},"id":"dd57b74f-74f4-4191-bc88-f6b23df891fd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"},"ticker":{"id":"31fd18d4-fbe2-4bf1-90e3-28b3c5b6d269","type":"BasicTicker"}},"id":"14b27669-7027-40fe-b41a-e9fc35abefdd","type":"Grid"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"}],"species":["setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa"],"x_values":[1.4,1.4,1.3,1.5,1.4,1.7,1.4,1.5,1.4,1.5,1.5,1.6,1.4,1.1,1.2,1.5,1.3,1.4,1.7,1.5,1.7,1.5,1.0,1.7,1.9,1.6,1.6,1.5,1.4,1.6,1.6,1.5,1.5,1.4,1.5,1.2,1.3,1.4,1.3,1.5,1.3,1.3,1.3,1.6,1.9,1.4,1.6,1.4,1.5,1.4],"y_values":[0.2,0.2,0.2,0.2,0.2,0.4,0.3,0.2,0.2,0.1,0.2,0.2,0.1,0.1,0.2,0.4,0.4,0.3,0.3,0.3,0.2,0.4,0.2,0.5,0.2,0.2,0.4,0.2,0.2,0.2,0.2,0.4,0.1,0.2,0.2,0.2,0.2,0.1,0.2,0.2,0.3,0.3,0.2,0.6,0.4,0.3,0.2,0.2,0.2,0.2]}},"id":"23b88025-9368-41ad-9119-e125cfc6ae91","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"7c4b6cb3-41c7-4875-90ed-bd24dc673514","type":"Triangle"},{"attributes":{"plot":{"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"}},"id":"ef6f560c-e83a-43b0-922c-d2ce8a9b999e","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"20477579-91b2-421d-96a4-c360b5d8c100","type":"PanTool"},{"id":"578ed1b8-949d-4b69-8ceb-741661f39eaa","type":"WheelZoomTool"},{"id":"3d5b3510-d199-4f16-94bb-bbac9b5267c6","type":"BoxZoomTool"},{"id":"3025be41-6f0f-4247-b4c9-61172e85ceb2","type":"SaveTool"},{"id":"ef6f560c-e83a-43b0-922c-d2ce8a9b999e","type":"ResetTool"},{"id":"6c5e280c-3279-4bc8-86af-d2212e0960f5","type":"HelpTool"}]},"id":"36da5984-eb98-46f9-9f28-73b2a44be004","type":"Toolbar"},{"attributes":{"axis_label":"petal_width","formatter":{"id":"81c365eb-409a-49af-986c-eb9564282494","type":"BasicTickFormatter"},"plot":{"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"},"ticker":{"id":"84089ab3-3a74-47bd-8459-bad15849734d","type":"BasicTicker"}},"id":"1d14fcd4-66d3-41a1-ab8a-f63226bea6b9","type":"LinearAxis"},{"attributes":{},"id":"ac01e2e1-724e-49f4-aa91-40aed92595b2","type":"BasicTickFormatter"},{"attributes":{"legends":[["setosa",[{"id":"fcca5984-6cdb-42c6-a4c3-152f9be910da","type":"GlyphRenderer"}]],["versicolor",[{"id":"44f87b13-6745-4e69-848b-5d732afe8445","type":"GlyphRenderer"}]],["virginica",[{"id":"efd4a73a-4088-4661-9677-3a1c1813c369","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"}},"id":"3ba83ffd-f561-4753-b2aa-df714954e41e","type":"Legend"},{"attributes":{"callback":null,"end":7.49,"start":0.4099999999999999},"id":"91ce48af-9893-4dc9-82d0-67c079eae531","type":"Range1d"},{"attributes":{"plot":{"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"}},"id":"6c5e280c-3279-4bc8-86af-d2212e0960f5","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"1ba62ced-635b-4185-a42d-146a7aa22abd","type":"Square"},{"attributes":{"callback":null,"column_names":["x_values","y_values"],"data":{"chart_index":[{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"}],"species":["virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica"],"x_values":[6.0,5.1,5.9,5.6,5.8,6.6,4.5,6.3,5.8,6.1,5.1,5.3,5.5,5.0,5.1,5.3,5.5,6.7,6.9,5.0,5.7,4.9,6.7,4.9,5.7,6.0,4.8,4.9,5.6,5.8,6.1,6.4,5.6,5.1,5.6,6.1,5.6,5.5,4.8,5.4,5.6,5.1,5.1,5.9,5.7,5.2,5.0,5.2,5.4,5.1],"y_values":[2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2.0,1.9,2.1,2.0,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2.0,2.0,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2.0,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2.0,2.3,1.8]}},"id":"26b32113-04ec-45f0-8c6e-142a2b12b79a","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"26b32113-04ec-45f0-8c6e-142a2b12b79a","type":"ColumnDataSource"},"glyph":{"id":"7c4b6cb3-41c7-4875-90ed-bd24dc673514","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"efd4a73a-4088-4661-9677-3a1c1813c369","type":"GlyphRenderer"},{"attributes":{},"id":"31fd18d4-fbe2-4bf1-90e3-28b3c5b6d269","type":"BasicTicker"},{"attributes":{"overlay":{"id":"23c899d7-0d18-4ab5-b136-4bc5f9ef5f74","type":"BoxAnnotation"},"plot":{"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"}},"id":"3d5b3510-d199-4f16-94bb-bbac9b5267c6","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d","subtype":"Chart","type":"Plot"}},"id":"578ed1b8-949d-4b69-8ceb-741661f39eaa","type":"WheelZoomTool"},{"attributes":{},"id":"84089ab3-3a74-47bd-8459-bad15849734d","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"b8f4abca-8e1a-49e7-b54a-0b3eb7b475a9","type":"Circle"},{"attributes":{},"id":"81c365eb-409a-49af-986c-eb9564282494","type":"BasicTickFormatter"},{"attributes":{},"id":"06ba2aa7-5d10-4158-b8c8-c207d0eb3618","type":"ToolEvents"}],"root_ids":["79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"33043767-751e-4fe9-ba17-189c500458f4","elementid":"ee8efbd3-5e40-4e67-a6e2-65ce44a4864f","modelid":"79c29f6d-b20e-4cfe-b48f-bc14b5e3a26d"}];
              
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