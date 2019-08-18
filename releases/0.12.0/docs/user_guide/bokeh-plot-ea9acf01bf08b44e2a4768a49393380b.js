document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("9b62e18e-05c6-4f5a-9195-6a2f446d7475");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9b62e18e-05c6-4f5a-9195-6a2f446d7475' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"c45a2df8-2324-43a3-8e43-22b6bbe1eb99":{"roots":{"references":[{"attributes":{},"id":"310a8d79-290d-4992-a1d5-6f646fa7aa8a","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"68004add-8f67-4056-9551-b7635fab8800","type":"PanTool"},{"id":"437c86bb-f5a1-4c25-95b0-98552086d6bc","type":"WheelZoomTool"},{"id":"4f87e282-5a4e-4d87-8923-521f7e05b571","type":"BoxZoomTool"},{"id":"4525ff88-98b6-4b6d-930a-47cfe243aff0","type":"SaveTool"},{"id":"dfb34860-400b-4efa-88e9-b6468dc92858","type":"ResetTool"},{"id":"da0c0860-cd22-4174-8b42-cfa244168075","type":"HelpTool"}]},"id":"ddb3e5a1-697f-42dc-902f-c95e230b146d","type":"Toolbar"},{"attributes":{"data_source":{"id":"021dbadb-d2f8-4253-9a85-48f6349a3aa5","type":"ColumnDataSource"},"glyph":{"id":"7852075a-6d52-464a-933a-e3d8852f2aa4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"aa14f6ab-cf79-4e8d-b9c5-f109568abae1","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["70","71","72","73","74","75","76","77","78","79","80","81","82"]},"id":"206266c1-7ef0-4b3e-991e-9ff27cb866cc","type":"FactorRange"},{"attributes":{"plot":{"id":"da154420-f11b-4427-8780-149a2ef13d72","subtype":"Chart","type":"Plot"}},"id":"68004add-8f67-4056-9551-b7635fab8800","type":"PanTool"},{"attributes":{"plot":{"id":"da154420-f11b-4427-8780-149a2ef13d72","subtype":"Chart","type":"Plot"}},"id":"dfb34860-400b-4efa-88e9-b6468dc92858","type":"ResetTool"},{"attributes":{"axis_label":"Sum( Displ )","formatter":{"id":"4a5160bc-ca28-46a9-be8b-e86d9c1d0f15","type":"BasicTickFormatter"},"plot":{"id":"da154420-f11b-4427-8780-149a2ef13d72","subtype":"Chart","type":"Plot"},"ticker":{"id":"e01e3ff3-f582-4b9c-ade5-ec78cafe5995","type":"BasicTicker"}},"id":"81cf0a5c-f538-4886-98b3-49fd69c013da","type":"LinearAxis"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"544041da-64b1-4a0a-8e28-583259a7582a","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b9bd9d3-1787-45d2-ac2a-538f2f55d23b","type":"Rect"},{"attributes":{"dimension":1,"plot":{"id":"da154420-f11b-4427-8780-149a2ef13d72","subtype":"Chart","type":"Plot"},"ticker":{"id":"e01e3ff3-f582-4b9c-ade5-ec78cafe5995","type":"BasicTicker"}},"id":"e6ecc01a-164d-4743-bdf6-be24fae532c7","type":"Grid"},{"attributes":{"plot":null,"text":"Total DISPL by YR"},"id":"2fd582df-a002-4895-b021-67b205df7420","type":"Title"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":74}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[4437.0],"label":[{"yr":74}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["74"],"y":[2218.5],"yr":[74]}},"id":"a5e8de0f-3bc7-43a8-af58-55dea4a43a58","type":"ColumnDataSource"},{"attributes":{},"id":"a7840dc2-d0e3-42f5-87a5-3f8067f45c29","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"83114c3d-3da3-41f8-a32f-6f3205c6a5da","type":"ColumnDataSource"},"glyph":{"id":"4b3ecf2b-017a-4ad0-9894-44fbb3e43aa7","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b4ddf4e9-660f-4163-954e-63a72b4e4bda","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"54bc9037-a499-41e4-9da0-8331d36d45c8","type":"ColumnDataSource"},"glyph":{"id":"1b9bd9d3-1787-45d2-ac2a-538f2f55d23b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e1cbc810-4aad-4f80-92d1-1e139accd182","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9b1d7d70-fd15-4d61-ae62-a4c936bfa91c","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"591af2b5-58b5-49b3-b334-016e539a4b81","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":72}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[6114.5],"label":[{"yr":72}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["72"],"y":[3057.25],"yr":[72]}},"id":"a78d184f-5e7d-4aa8-87ee-6e52173f22f4","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":81}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[3824.0],"label":[{"yr":81}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["81"],"y":[1912.0],"yr":[81]}},"id":"2a5d8dd6-70a3-4099-ac8d-835b62b5530c","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"da154420-f11b-4427-8780-149a2ef13d72","subtype":"Chart","type":"Plot"}},"id":"437c86bb-f5a1-4c25-95b0-98552086d6bc","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c05977ab-b12a-4b6c-89d8-f8150eec6df6","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9058733-e0c1-4194-a105-337bbc73eb40","type":"Rect"},{"attributes":{"plot":{"id":"da154420-f11b-4427-8780-149a2ef13d72","subtype":"Chart","type":"Plot"}},"id":"da0c0860-cd22-4174-8b42-cfa244168075","type":"HelpTool"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":76}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[6725.0],"label":[{"yr":76}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["76"],"y":[3362.5],"yr":[76]}},"id":"c802cd71-99c9-4b83-a223-1a79093cc2bd","type":"ColumnDataSource"},{"attributes":{},"id":"e01e3ff3-f582-4b9c-ade5-ec78cafe5995","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":73}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[10275.0],"label":[{"yr":73}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["73"],"y":[5137.5],"yr":[73]}},"id":"f98a2876-5ea8-42c4-b0d3-3e0f07470185","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"15813806-8650-4229-b152-ddb6a936fea3","type":"ColumnDataSource"},"glyph":{"id":"b72e4117-b8fa-4f4d-92e4-4a560364a725","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e5a0bb39-abb9-47a8-973c-7f004b3e33d8","type":"GlyphRenderer"},{"attributes":{"legends":[["77",[{"id":"efe605e8-cd1c-4622-bbdf-da7e23cd198b","type":"GlyphRenderer"}]],["80",[{"id":"aa14f6ab-cf79-4e8d-b9c5-f109568abae1","type":"GlyphRenderer"}]],["73",[{"id":"2d98dda4-17c6-4405-8808-bde4925a76b0","type":"GlyphRenderer"}]],["72",[{"id":"c738f28c-26a4-43d2-be98-c2471d5fc046","type":"GlyphRenderer"}]],["78",[{"id":"e5a0bb39-abb9-47a8-973c-7f004b3e33d8","type":"GlyphRenderer"}]],["76",[{"id":"5a529c67-92dd-4a2e-9fc7-97837666e498","type":"GlyphRenderer"}]],["79",[{"id":"3938d3d9-f7b7-4f88-9ec4-9ed0a88331b9","type":"GlyphRenderer"}]],["75",[{"id":"b4ddf4e9-660f-4163-954e-63a72b4e4bda","type":"GlyphRenderer"}]],["74",[{"id":"ac96c34f-9e7b-4118-91c7-f59ba424c231","type":"GlyphRenderer"}]],["82",[{"id":"e1cbc810-4aad-4f80-92d1-1e139accd182","type":"GlyphRenderer"}]],["81",[{"id":"909b1e65-e3d9-4090-b232-41130fdc070c","type":"GlyphRenderer"}]],["71",[{"id":"3239f545-6d2c-4892-ab85-59d633a45e67","type":"GlyphRenderer"}]],["70",[{"id":"3edf726f-99b8-48ac-8693-a72d300bf6fe","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"da154420-f11b-4427-8780-149a2ef13d72","subtype":"Chart","type":"Plot"}},"id":"59e04a0d-d1bf-464c-a175-4765fe64c964","type":"Legend"},{"attributes":{"data_source":{"id":"6c9f4656-ee97-4b0f-9d57-1794a4df8111","type":"ColumnDataSource"},"glyph":{"id":"544041da-64b1-4a0a-8e28-583259a7582a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3edf726f-99b8-48ac-8693-a72d300bf6fe","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":77}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[5359.0],"label":[{"yr":77}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["77"],"y":[2679.5],"yr":[77]}},"id":"4b79f88b-d36e-4ed8-8f00-a6f30714c0c9","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":75}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[6166.0],"label":[{"yr":75}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["75"],"y":[3083.0],"yr":[75]}},"id":"83114c3d-3da3-41f8-a32f-6f3205c6a5da","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c802cd71-99c9-4b83-a223-1a79093cc2bd","type":"ColumnDataSource"},"glyph":{"id":"9a625a06-af8a-46a6-8644-89317958fafe","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5a529c67-92dd-4a2e-9fc7-97837666e498","type":"GlyphRenderer"},{"attributes":{},"id":"4a5160bc-ca28-46a9-be8b-e86d9c1d0f15","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":78}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[6401.0],"label":[{"yr":78}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["78"],"y":[3200.5],"yr":[78]}},"id":"15813806-8650-4229-b152-ddb6a936fea3","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"da154420-f11b-4427-8780-149a2ef13d72","subtype":"Chart","type":"Plot"}},"id":"4525ff88-98b6-4b6d-930a-47cfe243aff0","type":"SaveTool"},{"attributes":{"data_source":{"id":"2a5d8dd6-70a3-4099-ac8d-835b62b5530c","type":"ColumnDataSource"},"glyph":{"id":"68a142d9-c07b-4caf-b389-8386be468ef6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"909b1e65-e3d9-4090-b232-41130fdc070c","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"fd1fe3ce-6116-411a-bb1a-8983331cabbc","type":"ColumnDataSource"},"glyph":{"id":"9b1d7d70-fd15-4d61-ae62-a4c936bfa91c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3938d3d9-f7b7-4f88-9ec4-9ed0a88331b9","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":71}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[5775.0],"label":[{"yr":71}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["71"],"y":[2887.5],"yr":[71]}},"id":"c3ea60da-8d41-4632-840e-4930c8fb61e4","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a78d184f-5e7d-4aa8-87ee-6e52173f22f4","type":"ColumnDataSource"},"glyph":{"id":"583e0d0b-1776-4273-9158-7b322208fea6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"c738f28c-26a4-43d2-be98-c2471d5fc046","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":80}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[3134.0],"label":[{"yr":80}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["80"],"y":[1567.0],"yr":[80]}},"id":"021dbadb-d2f8-4253-9a85-48f6349a3aa5","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"fe2fad1d-84a6-4a39-851a-acd56d184815","type":"CategoricalAxis"}],"height":400,"left":[{"id":"81cf0a5c-f538-4886-98b3-49fd69c013da","type":"LinearAxis"}],"renderers":[{"id":"591af2b5-58b5-49b3-b334-016e539a4b81","type":"BoxAnnotation"},{"id":"efe605e8-cd1c-4622-bbdf-da7e23cd198b","type":"GlyphRenderer"},{"id":"aa14f6ab-cf79-4e8d-b9c5-f109568abae1","type":"GlyphRenderer"},{"id":"2d98dda4-17c6-4405-8808-bde4925a76b0","type":"GlyphRenderer"},{"id":"c738f28c-26a4-43d2-be98-c2471d5fc046","type":"GlyphRenderer"},{"id":"e5a0bb39-abb9-47a8-973c-7f004b3e33d8","type":"GlyphRenderer"},{"id":"5a529c67-92dd-4a2e-9fc7-97837666e498","type":"GlyphRenderer"},{"id":"3938d3d9-f7b7-4f88-9ec4-9ed0a88331b9","type":"GlyphRenderer"},{"id":"b4ddf4e9-660f-4163-954e-63a72b4e4bda","type":"GlyphRenderer"},{"id":"ac96c34f-9e7b-4118-91c7-f59ba424c231","type":"GlyphRenderer"},{"id":"e1cbc810-4aad-4f80-92d1-1e139accd182","type":"GlyphRenderer"},{"id":"909b1e65-e3d9-4090-b232-41130fdc070c","type":"GlyphRenderer"},{"id":"3239f545-6d2c-4892-ab85-59d633a45e67","type":"GlyphRenderer"},{"id":"3edf726f-99b8-48ac-8693-a72d300bf6fe","type":"GlyphRenderer"},{"id":"59e04a0d-d1bf-464c-a175-4765fe64c964","type":"Legend"},{"id":"fe2fad1d-84a6-4a39-851a-acd56d184815","type":"CategoricalAxis"},{"id":"81cf0a5c-f538-4886-98b3-49fd69c013da","type":"LinearAxis"},{"id":"e6ecc01a-164d-4743-bdf6-be24fae532c7","type":"Grid"}],"title":{"id":"2fd582df-a002-4895-b021-67b205df7420","type":"Title"},"tool_events":{"id":"f6f82eea-e76b-4824-8f8f-4990c178446c","type":"ToolEvents"},"toolbar":{"id":"ddb3e5a1-697f-42dc-902f-c95e230b146d","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"206266c1-7ef0-4b3e-991e-9ff27cb866cc","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"a45feb27-2719-45b9-838c-bf038e5eab7b","type":"Range1d"}},"id":"da154420-f11b-4427-8780-149a2ef13d72","subtype":"Chart","type":"Plot"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7852075a-6d52-464a-933a-e3d8852f2aa4","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":79}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[5994.0],"label":[{"yr":79}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["79"],"y":[2997.0],"yr":[79]}},"id":"fd1fe3ce-6116-411a-bb1a-8983331cabbc","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b72e4117-b8fa-4f4d-92e4-4a560364a725","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"15ed2789-76e0-46ce-a1b8-c6e7d5513c03","type":"Rect"},{"attributes":{"data_source":{"id":"c3ea60da-8d41-4632-840e-4930c8fb61e4","type":"ColumnDataSource"},"glyph":{"id":"15ed2789-76e0-46ce-a1b8-c6e7d5513c03","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"3239f545-6d2c-4892-ab85-59d633a45e67","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"4b79f88b-d36e-4ed8-8f00-a6f30714c0c9","type":"ColumnDataSource"},"glyph":{"id":"eb15f20b-56d4-4727-83eb-f98385edabd6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"efe605e8-cd1c-4622-bbdf-da7e23cd198b","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"583e0d0b-1776-4273-9158-7b322208fea6","type":"Rect"},{"attributes":{"data_source":{"id":"f98a2876-5ea8-42c4-b0d3-3e0f07470185","type":"ColumnDataSource"},"glyph":{"id":"a9058733-e0c1-4194-a105-337bbc73eb40","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"2d98dda4-17c6-4405-8808-bde4925a76b0","type":"GlyphRenderer"},{"attributes":{"axis_label":"Yr","formatter":{"id":"a7840dc2-d0e3-42f5-87a5-3f8067f45c29","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"da154420-f11b-4427-8780-149a2ef13d72","subtype":"Chart","type":"Plot"},"ticker":{"id":"310a8d79-290d-4992-a1d5-6f646fa7aa8a","type":"CategoricalTicker"}},"id":"fe2fad1d-84a6-4a39-851a-acd56d184815","type":"CategoricalAxis"},{"attributes":{"callback":null,"end":10788.75},"id":"a45feb27-2719-45b9-838c-bf038e5eab7b","type":"Range1d"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":82}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[3844.0],"label":[{"yr":82}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["82"],"y":[1922.0],"yr":[82]}},"id":"54bc9037-a499-41e4-9da0-8331d36d45c8","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a5e8de0f-3bc7-43a8-af58-55dea4a43a58","type":"ColumnDataSource"},"glyph":{"id":"c05977ab-b12a-4b6c-89d8-f8150eec6df6","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ac96c34f-9e7b-4118-91c7-f59ba424c231","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb15f20b-56d4-4727-83eb-f98385edabd6","type":"Rect"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9a625a06-af8a-46a6-8644-89317958fafe","type":"Rect"},{"attributes":{},"id":"f6f82eea-e76b-4824-8f8f-4990c178446c","type":"ToolEvents"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4b3ecf2b-017a-4ad0-9894-44fbb3e43aa7","type":"Rect"},{"attributes":{"overlay":{"id":"591af2b5-58b5-49b3-b334-016e539a4b81","type":"BoxAnnotation"},"plot":{"id":"da154420-f11b-4427-8780-149a2ef13d72","subtype":"Chart","type":"Plot"}},"id":"4f87e282-5a4e-4d87-8923-521f7e05b571","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"68a142d9-c07b-4caf-b389-8386be468ef6","type":"Rect"},{"attributes":{"callback":null,"column_names":["line_color","line_alpha","color","fill_alpha","height","width","y","x","label"],"data":{"chart_index":[{"yr":70}],"color":["#f22c40"],"fill_alpha":[0.8],"height":[8161.0],"label":[{"yr":70}],"line_alpha":[1.0],"line_color":["white"],"width":[0.4],"x":["70"],"y":[4080.5],"yr":[70]}},"id":"6c9f4656-ee97-4b0f-9d57-1794a4df8111","type":"ColumnDataSource"}],"root_ids":["da154420-f11b-4427-8780-149a2ef13d72"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"c45a2df8-2324-43a3-8e43-22b6bbe1eb99","elementid":"9b62e18e-05c6-4f5a-9195-6a2f446d7475","modelid":"da154420-f11b-4427-8780-149a2ef13d72"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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