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
      };var element = document.getElementById("51489578-81e5-4050-a3e6-5c2075161c42");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '51489578-81e5-4050-a3e6-5c2075161c42' but no matching script tag was found. ")
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
                  var docs_json = {"a6276d3f-a087-4ce0-aab6-bb73760ab7ef":{"roots":{"references":[{"attributes":{},"id":"14ca7ea5-3915-4fe5-9e6b-074b7108f459","type":"ToolEvents"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4cd6490b-9d9b-4dbf-9cf7-d98c15bbb126","type":"Rect"},{"attributes":{"plot":{"id":"9d59e108-7b72-4e93-b3b9-7145438f35f7","subtype":"Chart","type":"Plot"}},"id":"c64b0bd6-9a46-4736-bc23-925981fae57a","type":"SaveTool"},{"attributes":{"legends":[["77",[{"id":"6b75f83f-4848-4e99-bdc2-e14fee56f020","type":"GlyphRenderer"}]],["80",[{"id":"e3afeb9a-0cbd-4d23-a8ac-c74a78779b19","type":"GlyphRenderer"}]],["73",[{"id":"1c3e9344-b217-4bf9-9802-43d5c3f4d65a","type":"GlyphRenderer"}]],["72",[{"id":"e27dbc38-bdaf-4e44-99ba-457f5dc61c2d","type":"GlyphRenderer"}]],["78",[{"id":"7a6c03c1-8efc-410a-8161-f355d94f8949","type":"GlyphRenderer"}]],["76",[{"id":"98d75aef-38a5-4db5-a7ef-73e4aaf358a7","type":"GlyphRenderer"}]],["79",[{"id":"cac3fe33-8fdf-4ce5-bbac-c491f29d26e4","type":"GlyphRenderer"}]],["75",[{"id":"3ae167a9-9b6e-4fb3-8c09-2b551408dbb4","type":"GlyphRenderer"}]],["74",[{"id":"d50251ed-dbbc-48c4-ad63-1d300f9d9b3b","type":"GlyphRenderer"}]],["82",[{"id":"7f1ddff5-de98-4afb-8643-8828fb5b3dfb","type":"GlyphRenderer"}]],["81",[{"id":"7aee7beb-fa01-43c2-af56-63a8b7794a96","type":"GlyphRenderer"}]],["71",[{"id":"c6b0b382-c2cb-4972-bf5f-c46094b3eba4","type":"GlyphRenderer"}]],["70",[{"id":"86918f09-82e3-4376-ada2-1e33b7ef7f96","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"9d59e108-7b72-4e93-b3b9-7145438f35f7","subtype":"Chart","type":"Plot"}},"id":"d4b0c854-7eba-4929-a7a8-353fb4b9c3fc","type":"Legend"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ce4e3227-7ed7-4b39-9f28-1cb51d96fb3c","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":74}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[4437.0],"label":[{"yr":74}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["74"],"y":[2218.5],"yr":[74]}},"id":"1f9bd531-0f54-4825-8077-77442b53cddc","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"be85f25f-8e8d-4886-a195-4e1720ef07e9","type":"ColumnDataSource"},"glyph":{"id":"4cd6490b-9d9b-4dbf-9cf7-d98c15bbb126","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e3afeb9a-0cbd-4d23-a8ac-c74a78779b19","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"81592a7f-2d0c-4df4-9383-b453f4e8a4e3","type":"Rect"},{"attributes":{"data_source":{"id":"aa17c8c8-b773-42c1-9744-dedb64b2a98c","type":"ColumnDataSource"},"glyph":{"id":"dcf7f557-f384-4508-bc99-02aa39e37511","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7a6c03c1-8efc-410a-8161-f355d94f8949","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":70}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[8161.0],"label":[{"yr":70}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["70"],"y":[4080.5],"yr":[70]}},"id":"0590c2d3-8491-4130-967a-2664c0399cbd","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d85ec9d-1c6e-4da6-8a5d-6723710cf460","type":"Rect"},{"attributes":{"below":[{"id":"d3c82fbc-bc29-4db6-875b-cc43246faecf","type":"CategoricalAxis"}],"height":400,"left":[{"id":"1201199f-0464-4541-8d10-c57ebcb9e003","type":"LinearAxis"}],"renderers":[{"id":"9a6599cf-6840-4e9c-a3ba-19f66d54444b","type":"BoxAnnotation"},{"id":"6b75f83f-4848-4e99-bdc2-e14fee56f020","type":"GlyphRenderer"},{"id":"e3afeb9a-0cbd-4d23-a8ac-c74a78779b19","type":"GlyphRenderer"},{"id":"1c3e9344-b217-4bf9-9802-43d5c3f4d65a","type":"GlyphRenderer"},{"id":"e27dbc38-bdaf-4e44-99ba-457f5dc61c2d","type":"GlyphRenderer"},{"id":"7a6c03c1-8efc-410a-8161-f355d94f8949","type":"GlyphRenderer"},{"id":"98d75aef-38a5-4db5-a7ef-73e4aaf358a7","type":"GlyphRenderer"},{"id":"cac3fe33-8fdf-4ce5-bbac-c491f29d26e4","type":"GlyphRenderer"},{"id":"3ae167a9-9b6e-4fb3-8c09-2b551408dbb4","type":"GlyphRenderer"},{"id":"d50251ed-dbbc-48c4-ad63-1d300f9d9b3b","type":"GlyphRenderer"},{"id":"7f1ddff5-de98-4afb-8643-8828fb5b3dfb","type":"GlyphRenderer"},{"id":"7aee7beb-fa01-43c2-af56-63a8b7794a96","type":"GlyphRenderer"},{"id":"c6b0b382-c2cb-4972-bf5f-c46094b3eba4","type":"GlyphRenderer"},{"id":"86918f09-82e3-4376-ada2-1e33b7ef7f96","type":"GlyphRenderer"},{"id":"d4b0c854-7eba-4929-a7a8-353fb4b9c3fc","type":"Legend"},{"id":"d3c82fbc-bc29-4db6-875b-cc43246faecf","type":"CategoricalAxis"},{"id":"1201199f-0464-4541-8d10-c57ebcb9e003","type":"LinearAxis"},{"id":"ddae6db7-c679-4b5a-862f-d71e6b1a1ae6","type":"Grid"}],"title":{"id":"0af12552-90be-4d74-a87f-e7955b21cc82","type":"Title"},"tool_events":{"id":"14ca7ea5-3915-4fe5-9e6b-074b7108f459","type":"ToolEvents"},"toolbar":{"id":"df37845a-87bd-4186-9d34-dafc221a8f18","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"0456b16f-c719-41c4-a998-c9e871ff9998","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"d57153d0-a9f8-4003-8e21-04352d1ba9ed","type":"Range1d"}},"id":"9d59e108-7b72-4e93-b3b9-7145438f35f7","subtype":"Chart","type":"Plot"},{"attributes":{"axis_label":"Sum( Displ )","formatter":{"id":"7f37b515-895d-45db-a85c-3c147f70cfb8","type":"BasicTickFormatter"},"plot":{"id":"9d59e108-7b72-4e93-b3b9-7145438f35f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"c523a01c-8400-457b-9d5d-8f59a8314d20","type":"BasicTicker"}},"id":"1201199f-0464-4541-8d10-c57ebcb9e003","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":71}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[5775.0],"label":[{"yr":71}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["71"],"y":[2887.5],"yr":[71]}},"id":"c607ee57-d305-4a81-8d9a-c2d646ac3c48","type":"ColumnDataSource"},{"attributes":{},"id":"c523a01c-8400-457b-9d5d-8f59a8314d20","type":"BasicTicker"},{"attributes":{},"id":"f0fdb2d3-a547-4879-a699-eba9049b1fa6","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":80}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[3134.0],"label":[{"yr":80}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["80"],"y":[1567.0],"yr":[80]}},"id":"be85f25f-8e8d-4886-a195-4e1720ef07e9","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d5a7988c-6951-4182-a74d-4f33709c3dbd","type":"Rect"},{"attributes":{"data_source":{"id":"db19252f-9515-4197-bb69-ed2c22dd35a3","type":"ColumnDataSource"},"glyph":{"id":"9ea32bd1-d1ff-45c7-815d-65ebe06d452c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1c3e9344-b217-4bf9-9802-43d5c3f4d65a","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":76}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[6725.0],"label":[{"yr":76}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["76"],"y":[3362.5],"yr":[76]}},"id":"c08c5f61-0a95-4238-bb51-d11d5dc96080","type":"ColumnDataSource"},{"attributes":{},"id":"7f37b515-895d-45db-a85c-3c147f70cfb8","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"90f59859-3ac1-4218-84e3-48a98dc38c88","type":"Rect"},{"attributes":{"data_source":{"id":"60f0252e-0817-43c2-bcc3-15250ece8a1e","type":"ColumnDataSource"},"glyph":{"id":"ce4e3227-7ed7-4b39-9f28-1cb51d96fb3c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cac3fe33-8fdf-4ce5-bbac-c491f29d26e4","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"41f8009a-b181-4b34-8ee7-cea956e5511a","type":"PanTool"},{"id":"0405e785-ee67-4065-8c46-6815867552f3","type":"WheelZoomTool"},{"id":"5d705886-a9c8-4d1c-8505-8fb618d3b661","type":"BoxZoomTool"},{"id":"c64b0bd6-9a46-4736-bc23-925981fae57a","type":"SaveTool"},{"id":"f5a31241-f76f-459a-aa54-78d498c82cdb","type":"ResetTool"},{"id":"7a4c3e93-b9f4-46e8-a1df-b352b22d1084","type":"HelpTool"}]},"id":"df37845a-87bd-4186-9d34-dafc221a8f18","type":"Toolbar"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1df7bef8-464b-42c9-a65a-8c84f54daf31","type":"Rect"},{"attributes":{"axis_label":"Yr","formatter":{"id":"8cf46092-7a99-47e8-98f6-752185b667fc","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"9d59e108-7b72-4e93-b3b9-7145438f35f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"f0fdb2d3-a547-4879-a699-eba9049b1fa6","type":"CategoricalTicker"}},"id":"d3c82fbc-bc29-4db6-875b-cc43246faecf","type":"CategoricalAxis"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":79}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[5994.0],"label":[{"yr":79}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["79"],"y":[2997.0],"yr":[79]}},"id":"60f0252e-0817-43c2-bcc3-15250ece8a1e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1f9bd531-0f54-4825-8077-77442b53cddc","type":"ColumnDataSource"},"glyph":{"id":"90f59859-3ac1-4218-84e3-48a98dc38c88","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d50251ed-dbbc-48c4-ad63-1d300f9d9b3b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9d59e108-7b72-4e93-b3b9-7145438f35f7","subtype":"Chart","type":"Plot"}},"id":"7a4c3e93-b9f4-46e8-a1df-b352b22d1084","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":73}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[10275.0],"label":[{"yr":73}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["73"],"y":[5137.5],"yr":[73]}},"id":"db19252f-9515-4197-bb69-ed2c22dd35a3","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a2f178ef-d17a-4019-a228-d340eefc54a3","type":"ColumnDataSource"},"glyph":{"id":"0aef374f-9c9f-4430-af0f-d3f6b496e2e4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3ae167a9-9b6e-4fb3-8c09-2b551408dbb4","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"9d59e108-7b72-4e93-b3b9-7145438f35f7","subtype":"Chart","type":"Plot"}},"id":"f5a31241-f76f-459a-aa54-78d498c82cdb","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"9d59e108-7b72-4e93-b3b9-7145438f35f7","subtype":"Chart","type":"Plot"},"ticker":{"id":"c523a01c-8400-457b-9d5d-8f59a8314d20","type":"BasicTicker"}},"id":"ddae6db7-c679-4b5a-862f-d71e6b1a1ae6","type":"Grid"},{"attributes":{"data_source":{"id":"c607ee57-d305-4a81-8d9a-c2d646ac3c48","type":"ColumnDataSource"},"glyph":{"id":"d5a7988c-6951-4182-a74d-4f33709c3dbd","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c6b0b382-c2cb-4972-bf5f-c46094b3eba4","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Total DISPL by YR"},"id":"0af12552-90be-4d74-a87f-e7955b21cc82","type":"Title"},{"attributes":{"callback":null,"end":10788.75},"id":"d57153d0-a9f8-4003-8e21-04352d1ba9ed","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"9a6599cf-6840-4e9c-a3ba-19f66d54444b","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2a41a609-35c9-4187-9cdc-60536f145555","type":"Rect"},{"attributes":{"data_source":{"id":"0590c2d3-8491-4130-967a-2664c0399cbd","type":"ColumnDataSource"},"glyph":{"id":"0d85ec9d-1c6e-4da6-8a5d-6723710cf460","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"86918f09-82e3-4376-ada2-1e33b7ef7f96","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c08c5f61-0a95-4238-bb51-d11d5dc96080","type":"ColumnDataSource"},"glyph":{"id":"b048eaab-35b9-4523-bf46-724f12aada62","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"98d75aef-38a5-4db5-a7ef-73e4aaf358a7","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"bb0ce50f-1551-4d66-b22e-eb507ce7ece9","type":"ColumnDataSource"},"glyph":{"id":"2a41a609-35c9-4187-9cdc-60536f145555","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7aee7beb-fa01-43c2-af56-63a8b7794a96","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b048eaab-35b9-4523-bf46-724f12aada62","type":"Rect"},{"attributes":{"overlay":{"id":"9a6599cf-6840-4e9c-a3ba-19f66d54444b","type":"BoxAnnotation"},"plot":{"id":"9d59e108-7b72-4e93-b3b9-7145438f35f7","subtype":"Chart","type":"Plot"}},"id":"5d705886-a9c8-4d1c-8505-8fb618d3b661","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"9d59e108-7b72-4e93-b3b9-7145438f35f7","subtype":"Chart","type":"Plot"}},"id":"41f8009a-b181-4b34-8ee7-cea956e5511a","type":"PanTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dcf7f557-f384-4508-bc99-02aa39e37511","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":75}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[6166.0],"label":[{"yr":75}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["75"],"y":[3083.0],"yr":[75]}},"id":"a2f178ef-d17a-4019-a228-d340eefc54a3","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":82}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[3844.0],"label":[{"yr":82}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["82"],"y":[1922.0],"yr":[82]}},"id":"ff76e006-d2ca-4f09-990a-28f1c430946b","type":"ColumnDataSource"},{"attributes":{},"id":"8cf46092-7a99-47e8-98f6-752185b667fc","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":77}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[5359.0],"label":[{"yr":77}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["77"],"y":[2679.5],"yr":[77]}},"id":"e69d586d-952a-49b7-98d6-1fc76d20d989","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"bbd03587-03dd-42fa-b912-b91c9464e2ee","type":"ColumnDataSource"},"glyph":{"id":"1df7bef8-464b-42c9-a65a-8c84f54daf31","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e27dbc38-bdaf-4e44-99ba-457f5dc61c2d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":72}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[6114.5],"label":[{"yr":72}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["72"],"y":[3057.25],"yr":[72]}},"id":"bbd03587-03dd-42fa-b912-b91c9464e2ee","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":78}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[6401.0],"label":[{"yr":78}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["78"],"y":[3200.5],"yr":[78]}},"id":"aa17c8c8-b773-42c1-9744-dedb64b2a98c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9ea32bd1-d1ff-45c7-815d-65ebe06d452c","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":81}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[3824.0],"label":[{"yr":81}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["81"],"y":[1912.0],"yr":[81]}},"id":"bb0ce50f-1551-4d66-b22e-eb507ce7ece9","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["70","71","72","73","74","75","76","77","78","79","80","81","82"]},"id":"0456b16f-c719-41c4-a998-c9e871ff9998","type":"FactorRange"},{"attributes":{"plot":{"id":"9d59e108-7b72-4e93-b3b9-7145438f35f7","subtype":"Chart","type":"Plot"}},"id":"0405e785-ee67-4065-8c46-6815867552f3","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0aef374f-9c9f-4430-af0f-d3f6b496e2e4","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"489a420f-779e-491f-80c4-9e5d07a3e87f","type":"Rect"},{"attributes":{"data_source":{"id":"e69d586d-952a-49b7-98d6-1fc76d20d989","type":"ColumnDataSource"},"glyph":{"id":"81592a7f-2d0c-4df4-9383-b453f4e8a4e3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6b75f83f-4848-4e99-bdc2-e14fee56f020","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ff76e006-d2ca-4f09-990a-28f1c430946b","type":"ColumnDataSource"},"glyph":{"id":"489a420f-779e-491f-80c4-9e5d07a3e87f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7f1ddff5-de98-4afb-8643-8828fb5b3dfb","type":"GlyphRenderer"}],"root_ids":["9d59e108-7b72-4e93-b3b9-7145438f35f7"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"a6276d3f-a087-4ce0-aab6-bb73760ab7ef","elementid":"51489578-81e5-4050-a3e6-5c2075161c42","modelid":"9d59e108-7b72-4e93-b3b9-7145438f35f7"}];
                  
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