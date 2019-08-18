(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("eb791bc8-b380-4bbd-bf04-707865e68154");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eb791bc8-b380-4bbd-bf04-707865e68154' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"2c71d266-7c33-4995-aeab-9e1ee3e26bd9":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"19e275ee-b32b-4bc4-b716-add4199565d5","type":"PolyAnnotation"}},"id":"06949254-2c1d-4d3f-aa51-b04368d9971b","type":"LassoSelectTool"},{"attributes":{},"id":"efaeaaa4-dcb5-4de8-a55f-2afeb5e7c75a","type":"HelpTool"},{"attributes":{},"id":"1933f53e-f4e4-494c-8440-487e6492baea","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"eef90097-949f-4f2b-b4bf-7b503f9eb5bc","type":"BasicTickFormatter"},"plot":{"id":"33fb0e97-4c96-4e5f-ae68-1724f65fd5dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4167e11-5879-4e35-b6e9-a4e285169f8a","type":"BasicTicker"}},"id":"93d4af0f-d0bf-443b-a53a-ec3810f582e2","type":"LinearAxis"},{"attributes":{},"id":"a6b8a5f8-222a-4942-9db4-712852891833","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"8f8641c5-b3ac-421b-bf1c-f6f9f591ee76","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"94b3f40c-9188-40e1-bab8-194af2924e35","type":"BoxAnnotation"},{"attributes":{},"id":"33d342cb-3aba-46a2-9ae0-848fe14de385","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"a2fd037a-7959-4bcc-86a0-0e4e72631f49","type":"ColumnDataSource"},"glyph":{"id":"ee341762-f8a3-487b-b536-8f911389a215","type":"Circle"},"hover_glyph":{"id":"6d8d51d6-4eef-4a9a-95b0-0ee984ab951d","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"1caaac19-95d6-4976-866a-81a7d578fa84","type":"Circle"},"selection_glyph":null,"view":{"id":"ddd169fa-8d95-4ffd-9f09-302370aefff1","type":"CDSView"}},"id":"08817e42-48e0-43b5-b03f-b93ecb477d8d","type":"GlyphRenderer"},{"attributes":{},"id":"8a76796a-f08f-452a-8f70-c6131afce94d","type":"BasicTicker"},{"attributes":{},"id":"d4167e11-5879-4e35-b6e9-a4e285169f8a","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"1caaac19-95d6-4976-866a-81a7d578fa84","type":"Circle"},{"attributes":{},"id":"8a0ddf8f-d8ec-49a8-a93c-c56cf75be593","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"46e9c110-ea05-4f48-8d54-5c655f656e63","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"3576de78-92f3-4edc-b2cc-c815462fca9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a0ddf8f-d8ec-49a8-a93c-c56cf75be593","type":"BasicTicker"}},"id":"81e10354-d370-4523-ab13-cc35df042d5b","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"46e9c110-ea05-4f48-8d54-5c655f656e63","type":"BoxAnnotation"},"renderers":[{"id":"aa5e888d-d00f-46de-b36e-a62a0150c48b","type":"GlyphRenderer"}]},"id":"91f5f377-ef4b-43a5-b111-c9e432969f5c","type":"BoxSelectTool"},{"attributes":{},"id":"cd6bdf44-4215-4d3a-b88b-022e7a6bfd09","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"093341d9-bb62-4533-883c-6a926d629f27","type":"BoxSelectTool"},{"id":"c4aabc46-2ba2-4a7b-b8e5-c75c8e0785a6","type":"LassoSelectTool"},{"id":"0385a4fa-ac0a-4275-97ab-07135f1667ff","type":"HoverTool"},{"id":"efaeaaa4-dcb5-4de8-a55f-2afeb5e7c75a","type":"HelpTool"}]},"id":"539aa1d4-42de-485b-a75d-2743dc3caba9","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"a05a4b2f-e6ea-4f53-a213-489d16d23871","type":"Circle"},{"attributes":{"children":[{"id":"52f1abbf-1f64-40df-80e1-148e87524904","type":"ToolbarBox"},{"id":"4ac33504-5e1d-4749-bea5-fefb661824ed","type":"Column"}]},"id":"9baf060b-cfcf-45fc-a591-293cedf6e220","type":"Column"},{"attributes":{},"id":"c03e65d8-0242-4076-8b27-5d941b6ce73a","type":"HelpTool"},{"attributes":{},"id":"70401d8a-2f0b-41e9-a3dc-101b7a666b00","type":"LinearScale"},{"attributes":{"children":[{"id":"3576de78-92f3-4edc-b2cc-c815462fca9f","subtype":"Figure","type":"Plot"},{"id":"33fb0e97-4c96-4e5f-ae68-1724f65fd5dd","subtype":"Figure","type":"Plot"}]},"id":"dce37d70-04e1-4af6-92d3-2b3fae59d015","type":"Row"},{"attributes":{"children":[{"id":"dce37d70-04e1-4af6-92d3-2b3fae59d015","type":"Row"}]},"id":"4ac33504-5e1d-4749-bea5-fefb661824ed","type":"Column"},{"attributes":{"data_source":{"id":"a2fd037a-7959-4bcc-86a0-0e4e72631f49","type":"ColumnDataSource"},"glyph":{"id":"2ab6d30c-cba1-400c-963d-bd0ce105e515","type":"Circle"},"hover_glyph":{"id":"8f8641c5-b3ac-421b-bf1c-f6f9f591ee76","type":"Circle"},"muted_glyph":null,"nonselection_glyph":{"id":"a05a4b2f-e6ea-4f53-a213-489d16d23871","type":"Circle"},"selection_glyph":null,"view":{"id":"0e03b326-178c-4a22-ac0a-3aa1ed99bc8d","type":"CDSView"}},"id":"aa5e888d-d00f-46de-b36e-a62a0150c48b","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"32d00f35-a706-4451-9d63-234ae8b3a131","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"a2fd037a-7959-4bcc-86a0-0e4e72631f49","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"33fb0e97-4c96-4e5f-ae68-1724f65fd5dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"d4167e11-5879-4e35-b6e9-a4e285169f8a","type":"BasicTicker"}},"id":"78a6fd96-bb34-46a4-938e-7e212418495e","type":"Grid"},{"attributes":{},"id":"14a18963-e0d5-4b83-b1a7-aafdb95b8a12","type":"LinearScale"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"6d8d51d6-4eef-4a9a-95b0-0ee984ab951d","type":"Circle"},{"attributes":{"formatter":{"id":"a6b8a5f8-222a-4942-9db4-712852891833","type":"BasicTickFormatter"},"plot":{"id":"33fb0e97-4c96-4e5f-ae68-1724f65fd5dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"567a6d24-6835-4d22-8fc7-488f3d810d06","type":"BasicTicker"}},"id":"23e2c036-cea1-4bd0-863a-5302ea26d48e","type":"LinearAxis"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"91f5f377-ef4b-43a5-b111-c9e432969f5c","type":"BoxSelectTool"},{"id":"06949254-2c1d-4d3f-aa51-b04368d9971b","type":"LassoSelectTool"},{"id":"9a8a0c17-1b90-41fe-bf56-805ae62d1058","type":"HoverTool"},{"id":"c03e65d8-0242-4076-8b27-5d941b6ce73a","type":"HelpTool"},{"id":"093341d9-bb62-4533-883c-6a926d629f27","type":"BoxSelectTool"},{"id":"c4aabc46-2ba2-4a7b-b8e5-c75c8e0785a6","type":"LassoSelectTool"},{"id":"0385a4fa-ac0a-4275-97ab-07135f1667ff","type":"HoverTool"},{"id":"efaeaaa4-dcb5-4de8-a55f-2afeb5e7c75a","type":"HelpTool"}]},"id":"52f1abbf-1f64-40df-80e1-148e87524904","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"6bfb2ba0-b83f-421f-ab75-27b76a29a8b7","type":"DataRange1d"},{"attributes":{"callback":null},"id":"036a02c6-1233-4ee0-940d-4017e8e3b922","type":"DataRange1d"},{"attributes":{"source":{"id":"a2fd037a-7959-4bcc-86a0-0e4e72631f49","type":"ColumnDataSource"}},"id":"0e03b326-178c-4a22-ac0a-3aa1ed99bc8d","type":"CDSView"},{"attributes":{"callback":null},"id":"0385a4fa-ac0a-4275-97ab-07135f1667ff","type":"HoverTool"},{"attributes":{"below":[{"id":"23e2c036-cea1-4bd0-863a-5302ea26d48e","type":"LinearAxis"}],"left":[{"id":"93d4af0f-d0bf-443b-a53a-ec3810f582e2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"23e2c036-cea1-4bd0-863a-5302ea26d48e","type":"LinearAxis"},{"id":"7a4ada35-4309-4b42-8eaf-8c5c6c54e358","type":"Grid"},{"id":"93d4af0f-d0bf-443b-a53a-ec3810f582e2","type":"LinearAxis"},{"id":"78a6fd96-bb34-46a4-938e-7e212418495e","type":"Grid"},{"id":"94b3f40c-9188-40e1-bab8-194af2924e35","type":"BoxAnnotation"},{"id":"91021ae8-85e7-4f2e-b890-dda0f9c26e8c","type":"PolyAnnotation"},{"id":"08817e42-48e0-43b5-b03f-b93ecb477d8d","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"539aa1d4-42de-485b-a75d-2743dc3caba9","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"32d00f35-a706-4451-9d63-234ae8b3a131","type":"DataRange1d"},"x_scale":{"id":"cd6bdf44-4215-4d3a-b88b-022e7a6bfd09","type":"LinearScale"},"y_range":{"id":"6bfb2ba0-b83f-421f-ab75-27b76a29a8b7","type":"DataRange1d"},"y_scale":{"id":"079d765d-8b01-439c-910b-773914828adb","type":"LinearScale"}},"id":"33fb0e97-4c96-4e5f-ae68-1724f65fd5dd","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"94b3f40c-9188-40e1-bab8-194af2924e35","type":"BoxAnnotation"},"renderers":[{"id":"08817e42-48e0-43b5-b03f-b93ecb477d8d","type":"GlyphRenderer"}]},"id":"093341d9-bb62-4533-883c-6a926d629f27","type":"BoxSelectTool"},{"attributes":{"formatter":{"id":"1933f53e-f4e4-494c-8440-487e6492baea","type":"BasicTickFormatter"},"plot":{"id":"3576de78-92f3-4edc-b2cc-c815462fca9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a0ddf8f-d8ec-49a8-a93c-c56cf75be593","type":"BasicTicker"}},"id":"483d964d-c461-4f7d-b63c-95593172051e","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y0"}},"id":"2ab6d30c-cba1-400c-963d-bd0ce105e515","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"91f5f377-ef4b-43a5-b111-c9e432969f5c","type":"BoxSelectTool"},{"id":"06949254-2c1d-4d3f-aa51-b04368d9971b","type":"LassoSelectTool"},{"id":"9a8a0c17-1b90-41fe-bf56-805ae62d1058","type":"HoverTool"},{"id":"c03e65d8-0242-4076-8b27-5d941b6ce73a","type":"HelpTool"}]},"id":"c250dbbe-67ce-4a8f-9db9-fb573ad53461","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y1"}},"id":"ee341762-f8a3-487b-b536-8f911389a215","type":"Circle"},{"attributes":{"formatter":{"id":"33d342cb-3aba-46a2-9ae0-848fe14de385","type":"BasicTickFormatter"},"plot":{"id":"3576de78-92f3-4edc-b2cc-c815462fca9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a76796a-f08f-452a-8f70-c6131afce94d","type":"BasicTicker"}},"id":"4ba57ec8-e96d-40fe-8a24-2602b150465a","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"3576de78-92f3-4edc-b2cc-c815462fca9f","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a76796a-f08f-452a-8f70-c6131afce94d","type":"BasicTicker"}},"id":"d9855d60-2787-4733-8ba1-c44bbceb77e1","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"91021ae8-85e7-4f2e-b890-dda0f9c26e8c","type":"PolyAnnotation"},{"attributes":{"plot":{"id":"33fb0e97-4c96-4e5f-ae68-1724f65fd5dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"567a6d24-6835-4d22-8fc7-488f3d810d06","type":"BasicTicker"}},"id":"7a4ada35-4309-4b42-8eaf-8c5c6c54e358","type":"Grid"},{"attributes":{"callback":null},"id":"53297af6-4d49-4222-bf57-254e1e97b51e","type":"DataRange1d"},{"attributes":{},"id":"eef90097-949f-4f2b-b4bf-7b503f9eb5bc","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"91021ae8-85e7-4f2e-b890-dda0f9c26e8c","type":"PolyAnnotation"}},"id":"c4aabc46-2ba2-4a7b-b8e5-c75c8e0785a6","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"19e275ee-b32b-4bc4-b716-add4199565d5","type":"PolyAnnotation"},{"attributes":{"filters":[{"id":"733b2a4c-acf2-4069-8778-6a334a2ce24f","type":"BooleanFilter"}],"source":{"id":"a2fd037a-7959-4bcc-86a0-0e4e72631f49","type":"ColumnDataSource"}},"id":"ddd169fa-8d95-4ffd-9f09-302370aefff1","type":"CDSView"},{"attributes":{},"id":"079d765d-8b01-439c-910b-773914828adb","type":"LinearScale"},{"attributes":{"below":[{"id":"483d964d-c461-4f7d-b63c-95593172051e","type":"LinearAxis"}],"left":[{"id":"4ba57ec8-e96d-40fe-8a24-2602b150465a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"483d964d-c461-4f7d-b63c-95593172051e","type":"LinearAxis"},{"id":"81e10354-d370-4523-ab13-cc35df042d5b","type":"Grid"},{"id":"4ba57ec8-e96d-40fe-8a24-2602b150465a","type":"LinearAxis"},{"id":"d9855d60-2787-4733-8ba1-c44bbceb77e1","type":"Grid"},{"id":"46e9c110-ea05-4f48-8d54-5c655f656e63","type":"BoxAnnotation"},{"id":"19e275ee-b32b-4bc4-b716-add4199565d5","type":"PolyAnnotation"},{"id":"aa5e888d-d00f-46de-b36e-a62a0150c48b","type":"GlyphRenderer"}],"title":null,"toolbar":{"id":"c250dbbe-67ce-4a8f-9db9-fb573ad53461","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"53297af6-4d49-4222-bf57-254e1e97b51e","type":"DataRange1d"},"x_scale":{"id":"14a18963-e0d5-4b83-b1a7-aafdb95b8a12","type":"LinearScale"},"y_range":{"id":"036a02c6-1233-4ee0-940d-4017e8e3b922","type":"DataRange1d"},"y_scale":{"id":"70401d8a-2f0b-41e9-a3dc-101b7a666b00","type":"LinearScale"}},"id":"3576de78-92f3-4edc-b2cc-c815462fca9f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"567a6d24-6835-4d22-8fc7-488f3d810d06","type":"BasicTicker"},{"attributes":{"booleans":[true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,false,false,false,false,false,true,true,true,true,true]},"id":"733b2a4c-acf2-4069-8778-6a334a2ce24f","type":"BooleanFilter"},{"attributes":{"callback":null},"id":"9a8a0c17-1b90-41fe-bf56-805ae62d1058","type":"HoverTool"}],"root_ids":["9baf060b-cfcf-45fc-a591-293cedf6e220"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"2c71d266-7c33-4995-aeab-9e1ee3e26bd9","elementid":"eb791bc8-b380-4bbd-bf04-707865e68154","modelid":"9baf060b-cfcf-45fc-a591-293cedf6e220"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
